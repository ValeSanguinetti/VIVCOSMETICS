import {
    useEffect,
    useState,
} from "react";

import type { Product } from "../types/product.type";
import type { Category } from "../types/category.type";

import ProductService from "../services/ProductService";
import CategoryService from "../services/CategoryService";

import CategorySidebar from "../components/catalog/CategorySidebar";
import CatalogHeader from "../components/catalog/CatalogHeader";
import ProductGrid from "../components/catalog/ProductGrid";
import EmptyProducts from "../components/catalog/EmptyProducts";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const API_URL = import.meta.env.VITE_API_URL;

export default function CatalogPage() {
    const [products, setProducts] =
        useState<Product[]>([]);

    const [categories, setCategories] =
        useState<Category[]>([]);

    const [activeCategory, setActiveCategory] =
        useState("Todos los productos");

    const [loading, setLoading] =
        useState(true);

    const [loadingCategories, setLoadingCategories] =
        useState(true);

    const [isCategoryOpen, setIsCategoryOpen] =
        useState(false);

    // --------------------------------------------------
    // CARGAR DATOS
    // --------------------------------------------------

    useEffect(() => {
        cargarProductos();
        cargarCategorias();
    }, []);

    const cargarProductos = async () => {
        try {
            setLoading(true);

            const response =
                await ProductService.getAll(1);

            const data =
                response.data?.products ?? [];

            setProducts(data);
        } catch (error) {
            console.error(
                "Error al cargar productos:",
                error
            );

            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    const cargarCategorias = async () => {
        try {
            setLoadingCategories(true);

            const response =
                await CategoryService.getAll(1);

            const data =
                response.data?.categories ?? [];

            setCategories(data);
        } catch (error) {
            console.error(
                "Error al cargar categorías:",
                error
            );

            setCategories([]);
        } finally {
            setLoadingCategories(false);
        }
    };

    // --------------------------------------------------
    // CAMBIAR CATEGORÍA
    // --------------------------------------------------

    const handleCategoryChange = (
        category: string
    ) => {
        setActiveCategory(category);
        setIsCategoryOpen(false);
    };

    // --------------------------------------------------
    // FILTRAR PRODUCTOS
    // --------------------------------------------------

    const filteredProducts =
        activeCategory === "Todos los productos"
            ? products
            : products.filter((product) => {
                  const category =
                      product.categoria_nombre
                          ?.toLowerCase()
                          .trim() || "";

                  return (
                      category ===
                      activeCategory
                          .toLowerCase()
                          .trim()
                  );
              });

    // --------------------------------------------------
    // RENDER
    // --------------------------------------------------

    return (
        <div
            className="
                min-h-screen
                bg-[#131313]
                text-[#e2e2e2]
                antialiased
            "
        >
            {/* Header */}
           <Header />

            {/* Sidebar */}
            <CategorySidebar
                categories={categories}
                activeCategory={activeCategory}
                loadingCategories={
                    loadingCategories
                }
                isOpen={isCategoryOpen}
                onOpen={() =>
                    setIsCategoryOpen(true)
                }
                onCategoryChange={
                    handleCategoryChange
                }
                onClose={() =>
                    setIsCategoryOpen(false)
                }
            />

            {/* Main */}
            <main
                className="
                    pt-32
                    pb-[120px]
                    min-h-screen
                    md:pl-64
                "
            >
                <div
                    className="
                        max-w-[1280px]
                        mx-auto
                        px-5
                        md:px-[60px]
                    "
                >
                    {/* Header */}
                    <CatalogHeader
                        activeCategory={
                            activeCategory
                        }
                        productCount={
                            filteredProducts.length
                        }
                    />

                    {/* Products */}
                    <ProductGrid
                        products={filteredProducts}
                        loading={loading}
                        apiUrl={API_URL}
                    />

                    {/* Empty */}
                    {!loading &&
                        filteredProducts.length ===
                            0 && (
                            <EmptyProducts />
                        )}

                    {/* Load more */}
                    {!loading &&
                        filteredProducts.length >
                            0 && (
                            <div
                                className="
                                    mt-16
                                    flex
                                    justify-center
                                "
                            >
                                <button
                                    type="button"
                                    className="
                                        font-label-lg
                                        text-[14px]
                                        uppercase
                                        tracking-widest
                                        px-8
                                        py-4
                                        border
                                        border-white/30
                                        text-white
                                        hover:bg-white
                                        hover:text-black
                                        transition-all
                                        duration-300
                                    "
                                >
                                    ver mas productos
                                </button>
                            </div>
                        )}
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}