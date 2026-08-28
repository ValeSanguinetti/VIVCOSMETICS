import type { Category, CategoryData, CategoryResponse } from "../types/category.type";

const API_URL = import.meta.env.VITE_API_URL;

class CategoryService {

    // --------------------------------------------------
    // GET ALL CATEGORIES
    // --------------------------------------------------

    static async getAll(
        page: number = 1,
        search: string = ""
    ): Promise<CategoryResponse> {

        const token = localStorage.getItem("token");

        const params = new URLSearchParams();

        params.append("page", page.toString());
        params.append("limit", "10");

        if (search.trim()) {
            params.append("search", search.trim());
        }

        const response = await fetch(
            `${API_URL}/categories?${params.toString()}`,
            {
                method: "GET",

                headers: {
                    "Content-Type": "application/json",

                    ...(token && {
                        Authorization: `Bearer ${token}`,
                    }),
                },
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(
                result.message ||
                "No se pudieron obtener las categorías."
            );
        }

        return result;
    }

// --------------------------------------------------
// GET CATEGORY BY ID
// --------------------------------------------------

static async getById(
    id: number
): Promise<{
    success: boolean;
    message: string;
    data?: Category;
}> {

    const token = localStorage.getItem("token");

    const response = await fetch(
        `${API_URL}/categories/id/${id}`,
        {
            method: "GET",

            headers: {
                "Content-Type": "application/json",

                ...(token && {
                    Authorization: `Bearer ${token}`,
                }),
            },
        }
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(
            result.message ||
            "No se pudo obtener la categoría."
        );
    }

    return result;
}
    // --------------------------------------------------
    // CREATE CATEGORY
    // --------------------------------------------------

    static async create(
        data: CategoryData
    ): Promise<CategoryResponse> {

        const token = localStorage.getItem("token");

        const response = await fetch(
            `${API_URL}/categories`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",

                    ...(token && {
                        Authorization: `Bearer ${token}`,
                    }),
                },

                body: JSON.stringify({
                    nombre: data.nombre,
                }),
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(
                result.message ||
                "No se pudo crear la categoría."
            );
        }

        return result;
    }


    // --------------------------------------------------
    // UPDATE CATEGORY
    // --------------------------------------------------

    static async update(
        id: number,
        data: CategoryData
    ): Promise<CategoryResponse> {

        const token = localStorage.getItem("token");

        const response = await fetch(
            `${API_URL}/categories/${id}`,
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json",

                    ...(token && {
                        Authorization: `Bearer ${token}`,
                    }),
                },

                body: JSON.stringify({
                    nombre: data.nombre,
                }),
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(
                result.message ||
                "No se pudo actualizar la categoría."
            );
        }

        return result;
    }


    // --------------------------------------------------
    // DELETE CATEGORY
    // --------------------------------------------------

    static async delete(
        id: number
    ): Promise<CategoryResponse> {

        const token = localStorage.getItem("token");

        const response = await fetch(
            `${API_URL}/categories/${id}`,
            {
                method: "DELETE",

                headers: {
                    "Content-Type": "application/json",

                    ...(token && {
                        Authorization: `Bearer ${token}`,
                    }),
                },
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(
                result.message ||
                "No se pudo eliminar la categoría."
            );
        }

        return result;
    }
}

export default CategoryService;