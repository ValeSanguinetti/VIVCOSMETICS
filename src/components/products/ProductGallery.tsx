import type { Product, ProductImage, ProductVariantForm } from "../../types/product.type";

interface ProductGalleryProps {
    product: Product;
    images: ProductImage[];
    mainImage: string | null;
    selectedImage: string | null;
    selectedVariant: ProductVariantForm | null;
    imageVersion: number;
    getImageUrl: (imageUrl: string) => string;
    setSelectedImage: (image: string) => void;
}

const ProductGallery = ({
    product,
    images,
    mainImage,
    selectedImage,
    selectedVariant,
    imageVersion,
    getImageUrl,
    setSelectedImage,
}: ProductGalleryProps) => {
    return (
        <div className="col-span-1 md:col-span-7 flex flex-col gap-4">

            {/* IMAGEN PRINCIPAL */}
            <div className="w-full aspect-[3/4] bg-[#0e0e0e] relative overflow-hidden group">

                {mainImage ? (
                    <img
                        key={`${selectedVariant?.id ?? "product"}-${mainImage}-${imageVersion}`}
                        src={getImageUrl(mainImage)}
                        alt={`${product.nombre}${
                            selectedVariant
                                ? ` - ${selectedVariant.nombre}`
                                : ""
                        }`}
                        className="
                            absolute
                            inset-0
                            w-full
                            h-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-105
                        "
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[#555]">
                        <span className="material-symbols-outlined text-5xl">
                            image
                        </span>
                    </div>
                )}

            </div>

            {/* MINIATURAS */}
            {images.length > 0 && (
                <div className="grid grid-cols-2 gap-4">

                    {images.map((image, index) => {

                        const isSelected =
                            selectedImage === image.imageurl;

                        return (
                            <button
                                key={`${selectedVariant?.id ?? "product"}-${image.id ?? index}-${imageVersion}`}
                                type="button"
                                onClick={() =>
                                    setSelectedImage(image.imageurl)
                                }
                                className={`
                                    w-full
                                    aspect-square
                                    bg-[#0e0e0e]
                                    relative
                                    overflow-hidden
                                    cursor-pointer
                                    ${
                                        isSelected
                                            ? "ring-2 ring-white"
                                            : "ring-1 ring-white/10 hover:ring-white/50"
                                    }
                                `}
                            >
                                <img
                                    src={getImageUrl(image.imageurl)}
                                    alt={`${product.nombre} - imagen ${
                                        index + 1
                                    }`}
                                    className="
                                        absolute
                                        inset-0
                                        w-full
                                        h-full
                                        object-cover
                                        transition-transform
                                        duration-500
                                        hover:scale-105
                                    "
                                />
                            </button>
                        );
                    })}

                </div>
            )}

        </div>
    );
};

export default ProductGallery;