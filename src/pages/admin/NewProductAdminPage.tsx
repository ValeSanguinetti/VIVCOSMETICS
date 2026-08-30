import {
    useEffect,
    useState,
} from "react";

import { useParams } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar";

import AdminTopBar from "../../components/admin/AdminTopBar";

import ProductBasicInfo from "../../components/admin/newProducts/ProductBasicInfo";

import ProductMedia from "../../components/admin/newProducts/ProductMedia";

import ProductPricing from "../../components/admin/newProducts/ProductPricing";

import ProductVariants from "../../components/admin/newProducts/ProductVariants";

import CategoryService from "../../services/CategoryService";

import ProductService from "../../services/ProductService";

import type {
    ProductImage,
    ProductVariant,
} from "../../types/product.type";

const uniqueImages = (images: ProductImage[]): ProductImage[] =>
    Array.from(
        new Map(
            images.map(
                (image) => [
                    `${image.id ?? ""}:${image.imageurl}`,
                    image,
                ]
            )
        ).values()
    );

function NewProductAdminPage() {
const { id } = useParams<{ id: string }>();
const [existingImages, setExistingImages] = useState<ProductImage[]>([]);
const [deletedImageIds, setDeletedImageIds] = useState<number[]>([]);
const isEditMode = Boolean(id);
    const [
        nombre,
        setNombre
    ] = useState("");

    const [
        categoriaId,
        setCategoriaId
    ] = useState<number | null>(null);

    const [
        descripcion,
        setDescripcion
    ] = useState("");

    const [
        precio,
        setPrecio
    ] = useState("");

    const [
        stock,
        setStock
    ] = useState("");

const [
    imagenes,
    setImagenes
] = useState<File[]>([]);

    const [
        variantes,
        setVariantes
    ] = useState<ProductVariant[]>([]);

    const [
        categorias,
        setCategorias
    ] = useState<
        {
            id: number;
            nombre: string;
        }[]
    >([]);

    const [
        loadingCategories,
        setLoadingCategories
    ] = useState(true);

    const [
        saving,
        setSaving
    ] = useState(false);

    // --------------------------------------------------
    // CARGAR CATEGORÍAS
    // --------------------------------------------------

    useEffect(() => {

        const loadCategories =
            async () => {

                try {

                    const response =
                        await CategoryService.getAll(
                            1,
                            ""
                        );

                    setCategorias(
                        response.data?.categories ?? []
                    );

                } catch (error) {

                    console.error(
                        "Error al cargar categorías:",
                        error
                    );

                    alert(
                        error instanceof Error
                            ? error.message
                            : "No se pudieron cargar las categorías."
                    );

                } finally {

                    setLoadingCategories(false);

                }
            };

        loadCategories();

    }, []);

// --------------------------------------------------
// CARGAR PRODUCTO (SI ESTAMOS EN MODO EDICIÓN)
// --------------------------------------------------

useEffect(() => {

    if (!id) {
        return;
    }

    const loadProduct = async () => {

        try {

            const response =
                await ProductService.getById(
                    Number(id)
                );

            if (
                !response.success ||
                !response.data
            ) {
                throw new Error(
                    response.message ||
                    "No se pudo obtener el producto."
                );
            }

            const product =
                response.data;

            const productImages =
                product.imagenes ?? [];

            setNombre(
                product.nombre
            );

            setCategoriaId(
                product.categoria_id
            );

            setDescripcion(
                product.descripcion ?? ""
            );

            setPrecio(
                product.precio.toString()
            );

            setStock(
                product.stock.toString()
            );

            setVariantes(
                (product.variantes ?? []).map(
                    (variante) => {
                        const nestedImages = (
                            (variante.imagenes ?? []) as unknown[]
                        ).filter(
                            (image): image is ProductImage =>
                                typeof image === "object" &&
                                image !== null &&
                                "imageurl" in image
                        );

                        return {
                            ...variante,
                            imagenes: [],
                            imagenes_existentes: uniqueImages([
                                ...productImages.filter(
                                    (image) =>
                                        image.variante_id === variante.id
                                ),
                                ...nestedImages,
                            ]),
                        };
                    }
                )
            );

            setExistingImages(
                productImages.filter(
                    (image) => image.variante_id === null
                )
            );
        } catch (error) {

            console.error(
                "Error al cargar producto:",
                error
            );

            alert(
                error instanceof Error
                    ? error.message
                    : "No se pudo cargar el producto."
            );

        }

    };

    loadProduct();

}, [id]);
    // --------------------------------------------------
    // GUARDAR PRODUCTO
    // --------------------------------------------------
const handleSave = async () => {

    try {

        if (!nombre.trim()) {

            alert(
                "El nombre del producto es obligatorio."
            );

            return;
        }

        if (!categoriaId) {

            alert(
                "Debes seleccionar una categoría."
            );

            return;
        }

        if (
            !precio ||
            Number(precio) < 0
        ) {

            alert(
                "Debes ingresar un precio válido."
            );

            return;
        }

        // --------------------------------------------------
        // VALIDAR VARIANTES
        // --------------------------------------------------

        for (
            const variante
            of variantes
        ) {

            if (!variante.nombre.trim()) {

                alert(
                    "Todas las variantes deben tener un nombre."
                );

                return;
            }

            if (variante.stock < 0) {

                alert(
                    "El stock de las variantes no puede ser negativo."
                );

                return;
            }
        }

        setSaving(true);

        // --------------------------------------------------
        // CREAR FORMDATA
        // --------------------------------------------------

        const formData = new FormData();

        // --------------------------------------------------
        // DATOS BÁSICOS
        // --------------------------------------------------

        formData.append(
            "nombre",
            nombre.trim()
        );

        formData.append(
            "categoria_id",
            categoriaId.toString()
        );

        formData.append(
            "precio",
            Number(precio).toString()
        );


        formData.append(
            "descripcion",
            descripcion.trim()
        );

        // --------------------------------------------------
        // VARIANTES
        // --------------------------------------------------
        //
        // Por ahora mandamos solamente los datos.
        // Las imágenes de variantes las agregaremos
        // mediante variante_imagenes.
        //

        const variantesData = variantes.map(
            (variante) => ({
                nombre:
                    variante.nombre.trim(),

                codigo_color:
                    variante.codigo_color ?? null,

                stock:
                    variante.stock ?? 0,
            })
        );

        formData.append(
            "variantes",
            JSON.stringify(
                variantesData
            )
        );

        // --------------------------------------------------
        // IMÁGENES GENERALES
        // --------------------------------------------------

        imagenes.forEach(
            (file) => {

                formData.append(
                    "imagenes[]",
                    file
                );
            }
        );

        // --------------------------------------------------
        // IMÁGENES DE VARIANTES
        // --------------------------------------------------

        variantes.forEach(
            (variante, varianteIndex) => {

                if (
                    !variante.imagenes ||
                    variante.imagenes.length === 0
                ) {
                    return;
                }

                variante.imagenes.forEach(
                    (file) => {

                        formData.append(
                            `variante_imagenes[${varianteIndex}][]`,
                            file
                        );

                    }
                );

            }
        );


        // --------------------------------------------------
        // CREAR
        // --------------------------------------------------
const productData = {
    nombre: nombre.trim(),
    categoria_id: categoriaId,
    precio: Number(precio),
    stock: Number(stock) || 0,
    descripcion: descripcion.trim() || null,
    imagenes,
    imagenes_eliminadas: deletedImageIds,
    variantes,
};
if (isEditMode) {

    await ProductService.update(
        Number(id),
        productData
    );
} else {

    await ProductService.create(
        productData
    );

}

      window.location.href = "/admin/productos";

    } catch (error) {

        console.error(
            "Error al crear producto:",
            error
        );

        alert(
            error instanceof Error
                ? error.message
                : "No se pudo crear el producto."
        );

    } finally {

        setSaving(false);
    }
};

    // --------------------------------------------------
    // CANCELAR
    // --------------------------------------------------

    const handleCancel = () => {

        window.location.href =
            "/admin/productos";
    };

    return (

        <div className="min-h-screen bg-[#131313] text-[#e2e2e2] font-body-md">

            <AdminSidebar />

            <div className="md:ml-64 flex flex-col min-h-screen">

                <AdminTopBar />

                <main className="flex-1 px-5 md:px-20 py-16">

                    {/* PAGE HEADER */}

                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-16">

                        <h2 className="text-4xl md:text-5xl text-white font-semibold tracking-tight">
    {isEditMode
        ? "Editar Producto"
        : "Agregar Nuevo Producto"}
</h2>

                        <div className="flex gap-4">

                            <button
                                type="button"
                                onClick={handleCancel}
                                disabled={saving}
                                className="px-6 py-3 border border-white/30 text-white uppercase tracking-widest text-sm hover:bg-white/5 transition-colors disabled:opacity-50"
                            >
                                Cancelar
                            </button>

                            <button
                                type="button"
                                onClick={handleSave}
                                disabled={
                                    saving ||
                                    loadingCategories
                                }
                                className="px-6 py-3 bg-white text-black uppercase tracking-widest text-sm font-bold hover:bg-white/90 transition-colors disabled:opacity-50"
                            >
                               {saving
    ? "Saving..."
    : isEditMode
        ? "Editar Producto"
        : "Guardar Producto"}
                            </button>

                        </div>

                    </div>

                    {/* FORM */}

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                        {/* LEFT */}

                        <div className="lg:col-span-8 flex flex-col gap-6">

                            <ProductBasicInfo

                                nombre={nombre}

                                categoriaId={
                                    categoriaId
                                }

                                descripcion={
                                    descripcion
                                }

                                categorias={
                                    categorias
                                }

                                onNombreChange={
                                    setNombre
                                }

                                onCategoriaChange={
                                    setCategoriaId
                                }

                                onDescripcionChange={
                                    setDescripcion
                                }

                            />

 <ProductMedia
    images={imagenes}
    existingImages={existingImages}
    onImagesChange={setImagenes}
    onRemoveExistingImage={(imageId) => {
        setExistingImages((currentImages) =>
            currentImages.filter((image) => image.id !== imageId)
        );
        setDeletedImageIds((currentIds) => [
            ...currentIds,
            imageId,
        ]);
    }}
/>

                            <ProductVariants

                                variantes={
                                    variantes
                                }

                                onChange={
                                    setVariantes
                                }

                            />

                        </div>

                        {/* RIGHT */}

                        <div className="lg:col-span-4 flex flex-col gap-6">

                            <ProductPricing

                                precio={
                                    precio
                                }

                                stock={
                                    stock
                                }

                                onPrecioChange={
                                    setPrecio
                                }

                                onStockChange={
                                    setStock
                                }

                            />

                        </div>

                    </div>

                </main>

            </div>

        </div>
    );
}

export default NewProductAdminPage;

