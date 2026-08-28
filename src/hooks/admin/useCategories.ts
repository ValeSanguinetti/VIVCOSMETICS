import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CategoryService from "../../services/CategoryService";
import type { Category } from "../../types/category.type";

function useCategories() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalCategories, setTotalCategories] = useState(0);

    const [debouncedSearch, setDebouncedSearch] = useState("");

    const navigate = useNavigate();

    // --------------------------------------------------
    // DEBOUNCE DEL BUSCADOR
    // --------------------------------------------------

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedSearch(search);
            setCurrentPage(1);
        }, 400);

        return () => clearTimeout(timeout);
    }, [search]);

    // --------------------------------------------------
    // CARGAR CATEGORÍAS
    // --------------------------------------------------

    const loadCategories = useCallback(async () => {
        try {
            setLoading(true);
            setError("");

            const result = await CategoryService.getAll(
                currentPage,
                debouncedSearch
            );

            setCategories(
                result.data?.categories ?? []
            );

            setTotalPages(
                result.data?.pagination.total_pages ?? 1
            );

            setTotalCategories(
                result.data?.pagination.total ?? 0
            );

        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError(
                    "No se pudieron cargar las categorías."
                );
            }
        } finally {
            setLoading(false);
        }
    }, [currentPage, debouncedSearch]);

    // --------------------------------------------------
    // CARGAR AL ENTRAR / CAMBIAR PÁGINA / BÚSQUEDA
    // --------------------------------------------------

    useEffect(() => {
        loadCategories();
    }, [loadCategories]);

    // --------------------------------------------------
    // EDITAR
    // --------------------------------------------------

    const handleEdit = (category: Category) => {
        navigate(
            `/admin/categorias/editar/${category.id}`
        );
    };

    // --------------------------------------------------
    // ELIMINAR
    // --------------------------------------------------

    const handleDelete = async (category: Category) => {
        const confirmed = window.confirm(
            `¿Estás segura de que quieres eliminar la categoría "${category.nombre}"?`
        );

        if (!confirmed) {
            return;
        }

        try {
            setError("");
            setLoading(true);

            await CategoryService.delete(category.id);

            await loadCategories();

        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError(
                    "No se pudo eliminar la categoría."
                );
            }
        } finally {
            setLoading(false);
        }
    };

    // --------------------------------------------------
    // NUEVA CATEGORÍA
    // --------------------------------------------------

    const handleAddCategory = () => {
        navigate("/admin/categorias/nuevo");
    };

    // --------------------------------------------------
    // PÁGINA ANTERIOR
    // --------------------------------------------------

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // --------------------------------------------------
    // PÁGINA SIGUIENTE
    // --------------------------------------------------

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return {
        categories,
        search,
        setSearch,
        error,
        loading,

        currentPage,
        totalPages,
        totalCategories,

        handleEdit,
        handleDelete,
        handleAddCategory,
        handlePreviousPage,
        handleNextPage
    };
}

export default useCategories;