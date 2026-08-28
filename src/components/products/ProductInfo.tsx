import { useState } from "react";
import type {
    Product,
    ProductVariantForm,
} from "../../types/product.type";

import ProductVariants from "./ProductVariants";
import ProductAccordion from "./ProductAccordion";
import { useNavigate } from "react-router-dom";

interface ProductInfoProps {
    product: Product;
    selectedVariant: ProductVariantForm | null;
    currentStock: number;
    hasStock: boolean;
    quantity: number;
    maxQuantity: number;
    openAccordion: string | null;
    onVariantChange: (
        variant: Product["variantes"][number]
    ) => void;
    onClearVariant: () => void;
    updateQuantity: (change: number) => void;
    toggleAccordion: (id: string) => void;
    onAddToCart: () => void;
}

const ProductInfo = ({
    product,
    selectedVariant,
    hasStock,
    openAccordion,
    onVariantChange,
    onClearVariant,
    toggleAccordion,
    onAddToCart,
}: ProductInfoProps) => {

    const navigate = useNavigate();

    const [variantError, setVariantError] = useState(false);

    const handleAddToCart = () => {
        const token = localStorage.getItem("token");

        // Si no está logueado
        if (!token) {
            navigate("/login");
            return;
        }

        // Si el producto tiene variantes,
        // obligamos a seleccionar una
        if (
            product.tiene_variantes &&
            product.variantes &&
            product.variantes.length > 0 &&
            !selectedVariant
        ) {
            setVariantError(true);
            return;
        }

        // Todo correcto
        setVariantError(false);
        onAddToCart();
    };

    const handleVariantChange = (
        variant: Product["variantes"][number]
    ) => {
        setVariantError(false);
        onVariantChange(variant);
    };

    return (
        <div
            className="
                col-span-1
                md:col-span-5
                flex
                flex-col
                pt-8
                md:pt-0
                md:sticky
                md:top-32
                self-start
            "
        >

            {/* HEADER */}
            <div className="mb-6">
                <span
                    className="
                        inline-block
                        bg-white
                        text-black
                        text-xs
                        uppercase
                        px-2
                        py-1
                        mb-4
                        tracking-widest
                    "
                >
                    {product.categoria_nombre}
                </span>

                <h1
                    className="
                        text-3xl
                        md:text-5xl
                        font-semibold
                        tracking-tight
                        text-white
                        mb-2
                    "
                >
                    {product.nombre}
                </h1>

                <p className="text-2xl text-[#c4c7c8]">
                    ${Number(product.precio).toFixed(2)}
                </p>
            </div>

            {/* DESCRIPCIÓN */}
            {product.descripcion && (
                <p
                    className="
                        text-lg
                        leading-7
                        text-[#e2e2e2]
                        mb-16
                        border-b
                        border-white/10
                        pb-16
                    "
                >
                    {product.descripcion}
                </p>
            )}

            {/* VARIANTES */}
            <ProductVariants
                product={product}
                selectedVariant={selectedVariant}
                onVariantChange={handleVariantChange}
                onClearVariant={onClearVariant}
            />

            {/* MENSAJE DE ERROR */}
            {variantError && (
                <p
                    className="
                        text-sm
                        text-red-400
                        mb-4
                        -mt-4
                    "
                >
                    Por favor, seleccioná una variante antes de
                    agregar el producto al carrito.
                </p>
            )}

            {/* ADD TO BAG */}
            <button
                type="button"
                disabled={!hasStock}
                onClick={handleAddToCart}
                className="
                    w-full
                    bg-white
                    text-black
                    uppercase
                    tracking-widest
                    py-4
                    hover:bg-[#e5e2e1]
                    disabled:bg-[#333]
                    disabled:text-[#777]
                    disabled:cursor-not-allowed
                    transition-colors
                    mb-16
                    flex
                    items-center
                    justify-center
                    gap-2
                "
            >
                {hasStock
                    ? "Agregar al carrito"
                    : "Sin stock"}

                {hasStock && (
                    <span
                        className="material-symbols-outlined"
                        style={{
                            fontSize: "1.2rem",
                        }}
                    >
                        shopping_bag
                    </span>
                )}
            </button>

            {/* ACORDEONES */}
            <div className="border-t border-white/10">

                <ProductAccordion
                    title="Descripción"
                    id="description"
                    openAccordion={openAccordion}
                    toggleAccordion={toggleAccordion}
                >
                    <p>
                        {product.descripcion ||
                            "Este producto no tiene una descripción disponible."}
                    </p>
                </ProductAccordion>

                <ProductAccordion
                    title="Información del producto"
                    id="product-info"
                    openAccordion={openAccordion}
                    toggleAccordion={toggleAccordion}
                >
                    <div className="space-y-2">
                        <p>
                            <span className="text-white">
                                Categoría:
                            </span>{" "}
                            {product.categoria_nombre}
                        </p>

                        {product.slug && (
                            <p>
                                <span className="text-white">
                                    Código:
                                </span>{" "}
                                {product.slug}
                            </p>
                        )}

                        {selectedVariant && (
                            <p>
                                <span className="text-white">
                                    Variante:
                                </span>{" "}
                                {selectedVariant.nombre}
                            </p>
                        )}
                    </div>
                </ProductAccordion>

            </div>
        </div>
    );
};

export default ProductInfo;