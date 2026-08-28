import type { Category } from "../../types/category.type";
interface CategorySidebarProps {
    categories: Category[];
    activeCategory: string;
    loadingCategories: boolean;
    isOpen: boolean;
    onOpen: () => void;
    onCategoryChange: (category: string) => void;
    onClose: () => void;
}

export default function CategorySidebar({
    categories,
    activeCategory,
    loadingCategories,
    isOpen,
    onOpen,
    onCategoryChange,
    onClose,
}: CategorySidebarProps) {
    return (
        <>
            {/* Mobile button */}
            <button
                type="button"
                onClick={onOpen}
                className="
                    fixed
                    left-4
                    top-24
                    z-40
                    md:hidden
                    flex
                    items-center
                    justify-center
                    gap-2
                    px-4
                    py-3
                    bg-[#131313]
                    border
                    border-white/15
                    text-white
                    shadow-lg
                "
                aria-label="Abrir categorías"
            >
                <span className="material-symbols-outlined text-[20px]">
                    menu
                </span>
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="
                        fixed
                        inset-0
                        bg-black/60
                        z-40
                        md:hidden
                    "
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed
                    left-0
                    top-20
                    h-[calc(100vh-5rem)]
                    w-64
                    bg-[#131313]
                    border-r
                    border-white/10
                    px-6
                    py-8
                    flex
                    flex-col
                    z-40
                    transform
                    transition-transform
                    duration-300
                    ease-in-out
                    md:translate-x-0
                    ${
                        isOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }
                `}
            >
                {/* Header */}
                <div
                    className="
                        flex
                        items-center
                        justify-between
                        mb-10
                    "
                >
                    <div>
                        <p
                            className="
                                font-label-sm
                                text-[11px]
                                uppercase
                                tracking-widest
                                text-[#8e9192]
                                mb-2
                            "
                        >
                            
                        </p>

                        <h2
                            className="
                                font-headline-md
                                text-[24px]
                                text-white
                            "
                        >
                            Categorías
                        </h2>
                    </div>

                    {/* Close mobile */}
                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            md:hidden
                            flex
                            items-center
                            justify-center
                            w-9
                            h-9
                            text-[#c4c7c8]
                            hover:text-white
                        "
                        aria-label="Cerrar categorías"
                    >
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </button>
                </div>

                {/* Categories */}
                <nav className="flex-1 flex flex-col gap-1">
                    {/* All Products */}
                    <button
                        type="button"
                        onClick={() =>
                            onCategoryChange("Todos los productos")
                        }
                        className={`
                            w-full
                            flex
                            items-center
                            justify-between
                            text-left
                            py-3
                            px-3
                            border-r-2
                            transition-colors
                            ${
                                activeCategory ===
                                "Todos los productos"
                                    ? "text-white border-white bg-white/5"
                                    : "text-[#c4c7c8] border-transparent hover:text-white hover:bg-white/5"
                            }
                        `}
                    >
                        <span
                            className="
                                font-label-lg
                                text-[13px]
                                uppercase
                                tracking-wider
                            "
                        >
                            Todos los productos
                        </span>

                        <span className="material-symbols-outlined text-[18px]">
                            grid_view
                        </span>
                    </button>

                    {/* Loading */}
                    {loadingCategories && (
                        <div className="flex flex-col gap-3 mt-3 px-3">
                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="
                                        h-5
                                        bg-[#1f1f1f]
                                        animate-pulse
                                    "
                                />
                            ))}
                        </div>
                    )}

                    {/* Categories */}
                    {!loadingCategories &&
                        categories.map((category) => {
                            const categoryName =
                                category.nombre;

                            const active =
                                activeCategory ===
                                categoryName;

                            return (
                                <button
                                    type="button"
                                    key={category.id}
                                    onClick={() =>
                                        onCategoryChange(
                                            categoryName
                                        )
                                    }
                                    className={`
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        text-left
                                        py-3
                                        px-3
                                        border-r-2
                                        transition-colors
                                        ${
                                            active
                                                ? "text-white border-white bg-white/5"
                                                : "text-[#c4c7c8] border-transparent hover:text-white hover:bg-white/5"
                                        }
                                    `}
                                >
                                    <span
                                        className="
                                            font-label-lg
                                            text-[13px]
                                            uppercase
                                            tracking-wider
                                        "
                                    >
                                        {categoryName}
                                    </span>

                                    <span className="material-symbols-outlined text-[18px]">
                                        chevron_right
                                    </span>
                                </button>
                            );
                        })}

                    {/* Empty */}
                    {!loadingCategories &&
                        categories.length === 0 && (
                            <p
                                className="
                                    px-3
                                    mt-4
                                    text-xs
                                    text-[#8e9192]
                                "
                            >
                                No hay categorías disponibles.
                            </p>
                        )}
                </nav>
            </aside>
        </>
    );
}