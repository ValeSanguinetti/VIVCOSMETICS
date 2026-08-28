import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types/product.type";
import ProductService from "../services/ProductService";

const API_URL =
    import.meta.env.VITE_API_URL;



function FeaturedProducts() {
const [products, setProducts] = useState<Product[]>([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
    const loadProducts = async () => {
        try {
            setLoading(true);

          const result = await ProductService.getAll(
    1,
    "",
    "",
    4
);

         setProducts(result.data?.products ?? []);

        } catch (error) {
            console.error(
                "Error al cargar productos destacados:",
                error
            );
        } finally {
            setLoading(false);
        }
    };

    loadProducts();
}, []);

return (
    <section
        id="featured-products"
        className="
            py-section-padding
            px-margin-mobile
            md:px-margin-desktop
            max-w-[1280px]
            mx-auto
        "
    >

        {/* HEADER */}

        <div
            className="
                flex
                flex-col
                md:flex-row
                md:items-end
                md:justify-between
                gap-6
                border-b
                border-white/10
                pb-stack-md
                mb-stack-lg
            "
        >

            <div className="max-w-2xl">

                <span
                    className="
                        block
                        font-label-sm
                        text-label-sm
                        uppercase
                        tracking-widest
                        text-primary
                        mb-3
                    "
                >
                    Selección VIV Cosmetics
                </span>

                <h2
                    className="
                        font-headline-lg
                        text-headline-lg-mobile
                        md:text-headline-lg
                        text-primary
                        leading-tight
                    "
                >
                    Nuestros favoritos
                </h2>

            </div>

            <Link
                to="/productos"
                className="
                    inline-flex
                    items-center
                    gap-2
                    font-label-lg
                    text-label-lg
                    uppercase
                    tracking-widest
                    text-white/70
                    hover:text-white
                    transition-colors
                    shrink-0
                "
            >
                Ver catálogo

                <span
                    className="
                        material-symbols-outlined
                        text-[18px]
                    "
                >
                    arrow_forward
                </span>
            </Link>

        </div>


        {/* PRODUCTS */}

        {loading ? (

            <div
                className="
                    grid
                    grid-cols-2
                    md:grid-cols-4
                    gap-4
                    md:gap-gutter
                "
            >

                {[1, 2, 3, 4].map((item) => (

                    <div
                        key={item}
                        className="
                            aspect-[3/4]
                            bg-white/5
                            animate-pulse
                        "
                    />

                ))}

            </div>

        ) : products.length === 0 ? (

            <div
                className="
                    py-20
                    text-center
                    border
                    border-white/10
                "
            >

                <p
                    className="
                        text-[#8e9192]
                        font-['Manrope']
                    "
                >
                    Próximamente encontrarás nuestros productos destacados.
                </p>

            </div>

        ) : (

            <div
                className="
                    grid
                    grid-cols-2
                    md:grid-cols-4
                    gap-4
                    md:gap-gutter
                "
            >

                {products.map((product) => (

                    <Link
                        key={product.id}
                        to={`/producto/${product.slug}`}
                        className="group block"
                    >

                        {/* IMAGE */}

                        <div
                            className="
                                relative
                                aspect-[3/4]
                                overflow-hidden
                                bg-surface-container-low
                                border
                                border-white/10
                                mb-4
                            "
                        >

                            {product.main_image ? (

                                <img
                                    src={API_URL + product.main_image}
                                    alt={product.nombre}
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        transition-transform
                                        duration-700
                                        group-hover:scale-105
                                    "
                                />

                            ) : (

                                <div
                                    className="
                                        w-full
                                        h-full
                                        flex
                                        items-center
                                        justify-center
                                        text-white/20
                                    "
                                >

                                    <span
                                        className="
                                            material-symbols-outlined
                                            text-4xl
                                        "
                                    >
                                        image
                                    </span>

                                </div>

                            )}

                            {/* OVERLAY */}

                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-black/20
                                    opacity-0
                                    group-hover:opacity-100
                                    transition-opacity
                                    duration-500
                                "
                            />

                        </div>


                        {/* INFO */}

                        <div className="space-y-1">

                            <p
                                className="
                                    font-['Geist']
                                    text-[10px]
                                    uppercase
                                    tracking-widest
                                    text-primary
                                "
                            >
                                {product.categoria_nombre}
                            </p>

                            <h3
                                className="
                                    font-['Hanken_Grotesk']
                                    text-base
                                    md:text-lg
                                    text-white
                                    font-medium
                                    group-hover:text-primary
                                    transition-colors
                                "
                            >
                                {product.nombre}
                            </h3>

                            <p
                                className="
                                    font-['Geist']
                                    text-sm
                                    text-white/80
                                    pt-1
                                "
                            >
                                ${product.precio.toLocaleString("es-UY")}
                            </p>

                        </div>

                    </Link>

                ))}

            </div>

        )}


        {/* CTA */}

        {!loading && products.length > 0 && (

            <div className="flex justify-center mt-12">

                <Link
                    to="/productos"
                    className="
                        inline-flex
                        items-center
                        justify-center
                        bg-white
                        text-[#131313]
                        font-['Geist']
                        text-xs
                        uppercase
                        tracking-widest
                        px-8
                        py-4
                        hover:bg-[#c6c6c7]
                        transition-colors
                        duration-300
                    "
                >
                    Explorar catálogo
                </Link>

            </div>

        )}

    </section>
);


}

export default FeaturedProducts;
