import {
    useCallback,
    useEffect,
    useState
} from "react";

import {
    useNavigate
} from "react-router-dom";

import type {
    Product
} from "../../types/product.type";

import type {
    Category
} from "../../types/category.type";

import ProductService from "../../services/ProductService";
import CategoryService from "../../services/CategoryService";

const PRODUCTS_PER_PAGE = 10;

function useProducts() {
    // --------------------------------------------------
    // STATE
    // --------------------------------------------------

    const [products, setProducts] =
        useState<Product[]>([]);

    const [search, setSearch] =
        useState("");

    const [currentPage, setCurrentPage] =
        useState(1);

    const [totalProducts, setTotalProducts] =
        useState(0);

    const [totalPages, setTotalPages] =
        useState(1);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState<string | null>(null);

    const [categories, setCategories] =
        useState<Category[]>([]);

    const [selectedCategory, setSelectedCategory] =
        useState("");

    const navigate = useNavigate();

    // --------------------------------------------------
    // LOAD CATEGORIES
    // --------------------------------------------------

    const loadCategories = useCallback(async () => {
        try {
            const response =
                await CategoryService.getAll(
                    1,
                    ""
                );

            if (
                !response.success ||
                !response.data
            ) {
                throw new Error(
                    response.message ||
                    "No se pudieron obtener las categorías."
                );
            }

            setCategories(
                response.data.categories
            );

        } catch (error) {
            console.error(
                "Error loading categories:",
                error
            );
        }
    }, []);

    // --------------------------------------------------
    // LOAD PRODUCTS
    // --------------------------------------------------

    const loadProducts = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const response =
                await ProductService.getAll(
                    currentPage,
                    search,
                    selectedCategory
                );

            if (
                !response.success ||
                !response.data
            ) {
                throw new Error(
                    response.message ||
                    "No se pudieron obtener los productos."
                );
            }

            setProducts(
                response.data.products
            );

            setTotalProducts(
                response.data.pagination.total
            );

            setTotalPages(
                response.data.pagination.total_pages
            );

        } catch (error) {
            console.error(
                "Error loading products:",
                error
            );

            setError(
                error instanceof Error
                    ? error.message
                    : "No se pudieron cargar los productos."
            );

        } finally {
            setLoading(false);
        }
    }, [
        currentPage,
        search,
        selectedCategory
    ]);

    // --------------------------------------------------
    // LOAD CATEGORIES ON MOUNT
    // --------------------------------------------------

    useEffect(() => {
        loadCategories();
    }, [loadCategories]);

    // --------------------------------------------------
    // LOAD PRODUCTS
    // --------------------------------------------------

    useEffect(() => {
        loadProducts();
    }, [loadProducts]);

    // --------------------------------------------------
    // SEARCH
    // --------------------------------------------------

    const handleSearchChange = (
        value: string
    ) => {
        setSearch(value);
        setCurrentPage(1);
    };

    // --------------------------------------------------
    // CATEGORY FILTER
    // --------------------------------------------------

    const handleCategoryChange = (
        value: string
    ) => {
        setSelectedCategory(value);
        setCurrentPage(1);
    };

    // --------------------------------------------------
    // ADD PRODUCT
    // --------------------------------------------------

    const handleAddProduct = () => {
        navigate(
            "/admin/productos/nuevo"
        );
    };

    // --------------------------------------------------
    // EDIT PRODUCT
    // --------------------------------------------------

    const handleEditProduct = (
        product: Product
    ) => {
        navigate(
            `/admin/productos/editar/${product.id}`
        );
    };

    // --------------------------------------------------
    // DELETE PRODUCT
    // --------------------------------------------------

    const handleDeleteProduct = async (
        product: Product
    ) => {
        const confirmed =
            window.confirm(
                `¿Deseas eliminar "${product.nombre}"?`
            );

        if (!confirmed) {
            return;
        }

        try {
            setError(null);
            setLoading(true);

            await ProductService.delete(
                product.id
            );

            await loadProducts();

        } catch (error) {
            console.error(
                "Error deleting product:",
                error
            );

            setError(
                error instanceof Error
                    ? error.message
                    : "No se pudo eliminar el producto."
            );

        } finally {
            setLoading(false);
        }
    };

    // --------------------------------------------------
    // SHOWING
    // --------------------------------------------------

    const showingFrom =
        totalProducts === 0
            ? 0
            : (
                (currentPage - 1) *
                PRODUCTS_PER_PAGE
            ) + 1;

    const showingTo =
        Math.min(
            currentPage *
            PRODUCTS_PER_PAGE,
            totalProducts
        );

    // --------------------------------------------------
    // RETURN
    // --------------------------------------------------

    return {
        products,
        categories,

        search,
        selectedCategory,

        currentPage,
        totalPages,
        totalProducts,

        loading,
        error,

        showingFrom,
        showingTo,

        handleSearchChange,
        handleCategoryChange,

        handleAddProduct,
        handleEditProduct,
        handleDeleteProduct,

        setCurrentPage
    };
}

export default useProducts;