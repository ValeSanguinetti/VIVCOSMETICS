interface CategoryHeaderProps {
    onAdd: () => void;
}

function CategoryHeader({ onAdd }: CategoryHeaderProps) {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-4">
            <div>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
                    Categorias
                </h1>

                <p className="text-[#c4c7c8] mt-2 text-base md:text-lg">
                    Administra las categorias de productos de tu tienda.
                </p>
            </div>

            <button
                type="button"
                onClick={onAdd}
                className="
                    bg-white
                    text-black
                    px-6
                    py-3
                    uppercase
                    tracking-widest
                    font-semibold
                    text-sm
                    hover:bg-[#e2e2e2]
                    transition-colors
                    w-full
                    sm:w-auto
                "
            >
                <span className="material-symbols-outlined align-middle mr-2 text-[20px]">
                    add
                </span>

                Agregar Categoria
            </button>
        </div>
    );
}

export default CategoryHeader;