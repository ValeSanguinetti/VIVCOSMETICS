import type {
    Product,
    ProductVariantForm,
} from "../../types/product.type";

interface ProductVariantsProps {
    product: Product;
    selectedVariant: ProductVariantForm | null;
    onVariantChange: (
        variant: Product["variantes"][number]
    ) => void;
    onClearVariant: () => void;
}

const ProductVariants = ({
    product,
    selectedVariant,
    onVariantChange,
    onClearVariant,
}: ProductVariantsProps) => {

    if (
        !product.tiene_variantes ||
        !product.variantes ||
        product.variantes.length === 0
    ) {
        return null;
    }

    return (
        <div className="mb-8">

            <label
                className="
                    block
                    text-xs
                    uppercase
                    text-[#8e9192]
                    mb-3
                    tracking-widest
                "
            >
                Variante:

                <span className="text-white ml-1">
                    {selectedVariant?.nombre || "Ninguna"}
                </span>
            </label>

            <div className="flex flex-wrap gap-4">

                {/* NINGUNA VARIANTE */}
                <button
                    type="button"
                    onClick={onClearVariant}
                    title="Ver imágenes generales"
                    className={`
                        relative
                        w-9
                        h-9
                        rounded-full
                        transition-all
                        duration-200
                        flex
                        items-center
                        justify-center
                        bg-[#222]
                        border
                        border-white/20

                        ${
                            selectedVariant === null
                                ? "ring-2 ring-white ring-offset-2 ring-offset-[#131313]"
                                : "hover:ring-1 hover:ring-white/60"
                        }
                    `}
                >
                    <span className="material-symbols-outlined text-white text-sm">
                        close
                    </span>
                </button>

                {/* VARIANTES */}
                {product.variantes.map((variant) => {

                    const isSelected =
                        selectedVariant?.id === variant.id;

                    const isOutOfStock =
                        Number(variant.stock) <= 0;

                    return (
                        <button
                            key={variant.id}
                            type="button"
                            onClick={() =>
                                onVariantChange(variant)
                            }
                            disabled={isOutOfStock}
                            title={`${variant.nombre}${
                                isOutOfStock
                                    ? " - Sin stock"
                                    : ""
                            }`}
                            className={`
                                relative
                                w-9
                                h-9
                                rounded-full
                                transition-all
                                duration-200
                                flex
                                items-center
                                justify-center

                                ${
                                    isSelected
                                        ? "ring-2 ring-white ring-offset-2 ring-offset-[#131313]"
                                        : "ring-1 ring-white/20 hover:ring-white/60"
                                }

                                ${
                                    isOutOfStock
                                        ? "opacity-30 cursor-not-allowed"
                                        : "cursor-pointer"
                                }
                            `}
                        >
                            <span
                                className="w-full h-full rounded-full"
                                style={{
                                    backgroundColor:
                                        variant.codigo_color ||
                                        "#ccc",
                                }}
                            />

                            {isOutOfStock && (
                                <span
                                    className="
                                        absolute
                                        w-10
                                        h-[1px]
                                        bg-red-400
                                        rotate-45
                                    "
                                />
                            )}
                        </button>
                    );
                })}

            </div>
        </div>
    );
};

export default ProductVariants;