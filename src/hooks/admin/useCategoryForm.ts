import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CategoryService from "../../services/CategoryService";

function useCategoryForm() {
    const [nombre, setNombre] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [loadingCategory, setLoadingCategory] = useState(false);

    const navigate = useNavigate();

    const { id } = useParams<{
        id: string;
    }>();

    const isEditMode = Boolean(id);

    // --------------------------------------------------
    // CARGAR CATEGORÍA SI ESTAMOS EDITANDO
    // --------------------------------------------------

    useEffect(() => {
        if (!id) {
            return;
        }

        const loadCategory = async () => {
            try {
                setLoadingCategory(true);
                setError("");

                const result =
                    await CategoryService.getById(
                        Number(id)
                    );

                if (result.data) {
                    setNombre(result.data.nombre);
                } else {
                    setError(
                        "No se encontró la categoría."
                    );
                }

            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError(
                        "No se pudo cargar la categoría."
                    );
                }
            } finally {
                setLoadingCategory(false);
            }
        };

        loadCategory();
    }, [id]);

    // --------------------------------------------------
    // CANCELAR
    // --------------------------------------------------

    const handleCancel = () => {
        navigate("/admin/categorias");
    };

    // --------------------------------------------------
    // GUARDAR / ACTUALIZAR
    // --------------------------------------------------

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setError("");

        // Validación
        if (!nombre.trim()) {
            setError(
                "El nombre de la categoría es obligatorio."
            );

            return;
        }

        try {
            setLoading(true);

            if (isEditMode) {
                // EDITAR
                await CategoryService.update(
                    Number(id),
                    {
                        nombre: nombre.trim(),
                    }
                );
            } else {
                // CREAR
                await CategoryService.create({
                    nombre: nombre.trim(),
                });
            }

            // Volver a categorías
            navigate("/admin/categorias");

        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError(
                    isEditMode
                        ? "No se pudo actualizar la categoría."
                        : "No se pudo crear la categoría."
                );
            }
        } finally {
            setLoading(false);
        }
    };

    return {
        nombre,
        setNombre,

        error,

        loading,
        loadingCategory,

        isEditMode,

        handleSubmit,
        handleCancel
    };
}

export default useCategoryForm;