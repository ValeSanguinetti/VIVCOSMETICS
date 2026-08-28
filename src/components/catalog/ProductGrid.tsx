import type { Product } from "../../types/product.type";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

interface ProductGridProps {
    products: Product[];
    loading: boolean;
    apiUrl: string;
}

const getProductName = (product: Product): string => {
    return product.nombre || "Producto VIV";
};

const getDescription = (product: Product): string => {
    return product.descripcion || "VIV Cosmetics";
};

const getPrice = (product: Product): number => {
    return Number(product.precio ?? 0);
};

const getProductImage = (
    product: Product
): string | null => {
    if (product.main_image) {
        return product.main_image;
    }

    if (
        product.imagenes &&
        product.imagenes.length > 0
    ) {
        return product.imagenes[0].imageurl;
    }

    return null;
};

export default function ProductGrid({
    products,
    loading,
    apiUrl,
}: ProductGridProps) {
    if (loading) {
        return (
            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-x-6
                    gap-y-16
                "
            >
                {[1, 2, 3].map((item) => (
                    <ProductSkeleton key={item} />
                ))}
            </div>
        );
    }

    return (
        <div
            className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-x-6
                gap-y-16
            "
        >
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    image={getProductImage(product)}
                    name={getProductName(product)}
                    description={getDescription(product)}
                    price={getPrice(product)}
                    apiUrl={apiUrl}
                />
            ))}
        </div>
    );
}