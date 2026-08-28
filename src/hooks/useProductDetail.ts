import { useEffect, useState } from "react";

import ProductService from "../services/ProductService";

import type {
    Product,
    ProductImage,
    ProductVariantForm,
} from "../types/product.type";

const API_URL = import.meta.env.VITE_API_URL;

const useProductDetail = (slug?: string) => {

    // =====================================================
    // ESTADO
    // =====================================================

    const [product, setProduct] =
        useState<Product | null>(null);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState<string | null>(null);

    const [quantity, setQuantity] =
        useState(1);

    const [openAccordion, setOpenAccordion] =
        useState<string | null>(null);

    const [selectedVariant, setSelectedVariant] =
        useState<ProductVariantForm | null>(null);

    const [selectedImage, setSelectedImage] =
        useState<string | null>(null);

    const [imageVersion, setImageVersion] =
        useState(Date.now());

    // =====================================================
    // CONVERTIR VARIANTE
    // =====================================================

    const variantToForm = (
        variant: Product["variantes"][number]
    ): ProductVariantForm => ({
        id: variant.id,
        nombre: variant.nombre,
        codigo_color: variant.codigo_color,
        stock: Number(variant.stock) || 0,
        imagenes: variant.imagenes || [],
    });

    // =====================================================
    // CARGAR PRODUCTO
    // =====================================================

    useEffect(() => {

        const loadProduct = async () => {

            if (!slug) {
                setError("Producto no encontrado.");
                setLoading(false);
                return;
            }

            try {

                setLoading(true);
                setError(null);

                const response =
                    await ProductService.getBySlug(slug);

                if (
                    response.success &&
                    response.data
                ) {

                    const loadedProduct =
                        response.data;

                    // Normalizamos los datos
                    // provenientes de PHP/MySQL

                    const normalizedProduct: Product = {
                        ...loadedProduct,

                        precio:
                            Number(
                                loadedProduct.precio
                            ) || 0,

                        stock:
                            Number(
                                loadedProduct.stock
                            ) || 0,

                        tiene_variantes:
                            Boolean(
                                loadedProduct.tiene_variantes
                            ),

                        variantes:
                            loadedProduct.variantes?.map(
                                (variant) => ({
                                    ...variant,

                                    stock:
                                        Number(
                                            variant.stock
                                        ) || 0,

                                    imagenes:
                                        variant.imagenes ||
                                        [],
                                })
                            ) || [],

                        imagenes:
                            loadedProduct.imagenes ||
                            [],
                    };

                    setProduct(
                        normalizedProduct
                    );

                    setImageVersion(
                        Date.now()
                    );

                    // Al ingresar al producto
                    // NO seleccionamos ninguna variante

                    setSelectedVariant(null);

                    // Mostramos la imagen principal

                    setSelectedImage(
                        normalizedProduct.main_image ||
                            normalizedProduct
                                .imagenes?.[0]
                                ?.imageurl ||
                            null
                    );

                    setQuantity(1);

                } else {

                    setError(
                        response.message ||
                            "No se pudo cargar el producto."
                    );
                }

            } catch (err) {

                console.error(
                    "Error al cargar producto:",
                    err
                );

                setError(
                    "Ocurrió un error al cargar el producto."
                );

            } finally {

                setLoading(false);

            }
        };

        loadProduct();

    }, [slug]);

    // =====================================================
    // CAMBIAR VARIANTE
    // =====================================================

    const handleVariantChange = (
        variant: Product["variantes"][number]
    ) => {

        if (Number(variant.stock) <= 0) {
            return;
        }

        const formattedVariant =
            variantToForm(variant);

        setSelectedVariant(
            formattedVariant
        );

        setQuantity(1);

        // Si la variante tiene imágenes,
        // mostramos su primera imagen

        if (
            formattedVariant.imagenes &&
            formattedVariant.imagenes.length > 0
        ) {

            setSelectedImage(
                formattedVariant
                    .imagenes[0]
                    .imageurl
            );

        } else {

            // Si no tiene imágenes,
            // volvemos a la imagen general

            setSelectedImage(
                product?.main_image ||
                    product?.imagenes?.[0]
                        ?.imageurl ||
                    null
            );
        }

        setImageVersion(
            Date.now()
        );
    };

    // =====================================================
    // QUITAR VARIANTE
    // =====================================================

    const handleClearVariant = () => {

        setSelectedVariant(null);

        setSelectedImage(
            product?.main_image ||
                product?.imagenes?.[0]
                    ?.imageurl ||
                null
        );

        setQuantity(1);

        setImageVersion(
            Date.now()
        );
    };

    // =====================================================
    // STOCK ACTUAL
    // =====================================================

    const getCurrentStock = (): number => {

        if (!product) {
            return 0;
        }

        // Si hay variante seleccionada,
        // usamos su stock

        if (
            product.tiene_variantes &&
            selectedVariant
        ) {

            return (
                Number(
                    selectedVariant.stock
                ) || 0
            );
        }

        // Si no hay variante,
        // usamos el stock general

        return (
            Number(product.stock) || 0
        );
    };

    // =====================================================
    // CANTIDAD
    // =====================================================

    const updateQuantity = (
        change: number
    ) => {

        setQuantity((current) => {

            const newQuantity =
                current + change;

            const maxQuantity =
                Math.min(
                    getCurrentStock(),
                    10
                );

            if (newQuantity < 1) {
                return 1;
            }

            if (
                newQuantity >
                maxQuantity
            ) {
                return maxQuantity;
            }

            return newQuantity;
        });
    };

    // =====================================================
    // ACORDEÓN
    // =====================================================

    const toggleAccordion = (
        accordionId: string
    ) => {

        setOpenAccordion((current) =>
            current === accordionId
                ? null
                : accordionId
        );
    };

    // =====================================================
    // IMAGEN PRINCIPAL
    // =====================================================

    const getMainImage = (): string | null => {

        if (!product) {
            return null;
        }

        // Imagen seleccionada manualmente

        if (selectedImage) {
            return selectedImage;
        }

        // Primera imagen de la variante

        if (
            selectedVariant &&
            selectedVariant.imagenes &&
            selectedVariant.imagenes.length > 0
        ) {

            return selectedVariant
                .imagenes[0]
                .imageurl;
        }

        // Imagen principal del producto

        if (product.main_image) {
            return product.main_image;
        }

        // Primera imagen general

        if (
            product.imagenes &&
            product.imagenes.length > 0
        ) {

            return product
                .imagenes[0]
                .imageurl;
        }

        return null;
    };

    // =====================================================
    // IMÁGENES
    // =====================================================

    const getProductImages = (): ProductImage[] => {

        if (!product) {
            return [];
        }

        // Si hay variante seleccionada
        // usamos solamente sus imágenes

        if (
            selectedVariant &&
            selectedVariant.imagenes &&
            selectedVariant.imagenes.length > 0
        ) {

            return selectedVariant.imagenes;
        }

        // Si no hay variante,
        // mostramos las imágenes generales

        return product.imagenes || [];
    };

    // =====================================================
    // URL DE IMAGEN
    // =====================================================

    const getImageUrl = (
        imageUrl: string
    ): string => {

        if (!imageUrl) {
            return "";
        }

        const url =
            imageUrl.startsWith("http://") ||
            imageUrl.startsWith("https://")
                ? imageUrl
                : `${API_URL.replace(
                      /\/$/,
                      ""
                  )}/${imageUrl.replace(
                      /^\//,
                      ""
                  )}`;

        return `${url}?v=${imageVersion}`;
    };

    // =====================================================
    // ESTADOS CALCULADOS
    // =====================================================

    const images =
        getProductImages();

    const mainImage =
        getMainImage();

    const currentStock =
        getCurrentStock();

    const hasStock =
        currentStock > 0;

    const maxQuantity =
        Math.min(
            currentStock,
            10
        );

    // =====================================================
    // RETURN
    // =====================================================

    return {
        // Producto
        product,
        loading,
        error,

        // Variantes
        selectedVariant,
        handleVariantChange,
        handleClearVariant,

        // Imágenes
        images,
        mainImage,
        selectedImage,
        setSelectedImage,
        imageVersion,
        getImageUrl,

        // Stock
        currentStock,
        hasStock,

        // Cantidad
        quantity,
        maxQuantity,
        updateQuantity,

        // Acordeón
        openAccordion,
        toggleAccordion,
    };
};

export default useProductDetail;