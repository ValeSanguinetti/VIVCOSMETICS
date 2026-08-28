interface CategoryFormProps {
    nombre: string;
    error: string;
    loading: boolean;
    isEditMode: boolean;

    onChangeNombre: (value: string) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
}

function CategoryForm({
    nombre,
    error,
    loading,
    isEditMode,
    onChangeNombre,
    onSubmit,
    onCancel
}: CategoryFormProps) {
    return (
        <div className="max-w-3xl w-full mx-auto">

            <form
                onSubmit={onSubmit}
                className="space-y-stack-md bg-surface p-8 md:p-12 border border-white/10"
            >

                {/* CATEGORY NAME */}

                <div className="space-y-4">

                    <label
                        htmlFor="category-name"
                        className="
                            block
                            font-label-lg
                            text-label-sm
                            uppercase
                            tracking-widest
                            text-on-surface
                        "
                    >
                        Nombre de la categoría
                    </label>

                    <div className="relative">

                        <input
                            id="category-name"
                            name="category-name"
                            type="text"
                            value={nombre}
                            onChange={(e) =>
                                onChangeNombre(
                                    e.target.value
                                )
                            }
                            placeholder="Ej., Serums, Labiales, Cuidado de la piel"
                            required
                            className="
                                w-full
                                bg-background
                                border-b
                                border-white/20
                                border-t-0
                                border-l-0
                                border-r-0
                                rounded-none
                                text-primary
                                py-4
                                px-0
                                focus:border-primary
                                focus:ring-0
                                placeholder:text-on-surface-variant/50
                                font-headline-md
                                text-headline-md
                                transition-colors
                                shadow-none
                            "
                        />

                    </div>

                    <p className="font-label-sm text-label-sm text-outline-variant mt-2">
                        Este nombre aparecerá en la navegación del catálogo.
                    </p>

                </div>

                {/* ERROR */}

                {error && (
                    <div className="border border-red-400/20 bg-red-400/5 px-4 py-3">
                        <p className="text-sm text-red-300">
                            {error}
                        </p>
                    </div>
                )}

                {/* ACTIONS */}

                <div className="pt-8 flex flex-col sm:flex-row items-center gap-4 justify-end border-t border-white/5 mt-12">

                    {/* CANCEL */}

                    <button
                        onClick={onCancel}
                        type="button"
                        className="
                            w-full
                            sm:w-auto
                            px-8
                            py-3
                            bg-transparent
                            border
                            border-white/30
                            text-primary
                            font-label-lg
                            text-label-lg
                            uppercase
                            tracking-widest
                            hover:bg-white/5
                            transition-colors
                        "
                    >
                        Cancelar
                    </button>

                    {/* SAVE / UPDATE */}

                    <button
                        type="submit"
                        disabled={loading}
                        className="
                            w-full
                            sm:w-auto
                            px-8
                            py-3
                            bg-primary
                            text-background
                            font-label-lg
                            text-label-lg
                            uppercase
                            tracking-widest
                            hover:bg-primary/90
                            transition-colors
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        "
                    >
                        {loading
                            ? (
                                isEditMode
                                    ? "Actualizando..."
                                    : "Guardando..."
                            )
                            : (
                                isEditMode
                                    ? "Actualizar Categoría"
                                    : "Guardar Categoría"
                            )
                        }
                    </button>

                </div>

            </form>

        </div>
    );
}

export default CategoryForm;