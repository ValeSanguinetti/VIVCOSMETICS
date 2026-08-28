import { Link } from "react-router-dom";
import type { Product } from "../../types/product.type";

interface ProductCardProps {
    product: Product;
    image: string | null;
    name: string;
    description: string;
    price: number;
    apiUrl: string;
}

export default function ProductCard({
    product,
    image,
    name,
    description,
    price,
    apiUrl,
}: ProductCardProps) {
    const imageUrl = image
        ? image.startsWith("http")
            ? image
            : apiUrl + image
        : null;

    return (
        <Link
            to={`/productos/${product.slug}`}
            className="group block cursor-pointer"
        >
            <article>
                {/* Image */}
                <div
                    className="
                        relative
                        aspect-[3/4]
                        mb-2
                        overflow-hidden
                        bg-[#1b1b1b]
                        border
                        border-white/5
                    "
                >
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={name}
                            className="
                                absolute
                                inset-0
                                w-full
                                h-full
                                object-cover
                                transform
                                group-hover:scale-105
                                transition-transform
                                duration-700
                                ease-out
                            "
                        />
                    ) : (
                        <div
                            className="
                                absolute
                                inset-0
                                flex
                                items-center
                                justify-center
                                text-[#555]
                            "
                        >
                            <span className="material-symbols-outlined text-4xl">
                                image
                            </span>
                        </div>
                    )}

                    {/* Gradient */}
                    <div
                        className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/60
                            via-transparent
                            to-transparent
                            opacity-0
                            group-hover:opacity-100
                            transition-opacity
                            duration-300
                        "
                    />

                    {/* Badge */}
                    {product.id === 1 && (
                        <div
                            className="
                                absolute
                                top-4
                                left-4
                            "
                        >
                            <span
                                className="
                                    bg-white
                                    text-black
                                    font-label-sm
                                    text-[12px]
                                    px-3
                                    py-1
                                    uppercase
                                    tracking-wider
                                "
                            >
                                New In
                            </span>
                        </div>
                    )}

                    {/* Cart */}
                   
                </div>

                {/* Product info */}
                <div
                    className="
                        flex
                        justify-between
                        items-start
                        gap-4
                    "
                >
                    <div>
                        <h3
                            className="
                                font-headline-md
                                text-[24px]
                                leading-8
                                text-white
                                mb-1
                            "
                        >
                            {name}
                        </h3>

                        <p
                            className="
                                font-body-md
                                text-[16px]
                                leading-6
                                text-[#c4c7c8]/60
                            "
                        >
                            {description}
                        </p>
                    </div>

                    <span
                        className="
                            font-label-lg
                            text-[14px]
                            leading-5
                            tracking-widest
                            text-white
                            whitespace-nowrap
                        "
                    >
                        ${price.toFixed(2)}
                    </span>
                </div>
            </article>
        </Link>
    );
}