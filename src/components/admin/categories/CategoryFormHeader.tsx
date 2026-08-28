interface CategoryFormHeaderProps {
    isEditMode: boolean;
}

function CategoryFormHeader({
    isEditMode
}: CategoryFormHeaderProps) {
    return (
        <header className="mb-stack-lg border-b border-white/10 pb-6">

            <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tighter">
                {isEditMode
                    ? "Editar Categoría"
                    : "Agregar Nueva Categoría"}
            </h1>

            <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
                {isEditMode
                    ? "Actualizar la información de la categoría."
                    : "Crear una nueva categoría organizativa para el catálogo de productos. Mantén los títulos concisos y editoriales."}
            </p>

        </header>
    );
}

export default CategoryFormHeader;