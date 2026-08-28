import type { Category } from "../../../types/category.type";

interface CategoryTableProps {
    categories: Category[];
    loading: boolean;
    onEdit: (category: Category) => void;
    onDelete: (category: Category) => void;
}

function CategoryTable({
    categories,
    loading,
    onEdit,
    onDelete
}: CategoryTableProps) {
    return (
        <div className="w-full overflow-x-auto border border-white/15 bg-[#0e0e0e]">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-white/15 bg-[#1f1f1f]/50">
                        <th className="p-4 md:px-6 text-xs uppercase tracking-widest text-[#c4c7c8]">
                            Nombre de la categoria
                        </th>

                        <th className="p-4 md:px-6 text-xs uppercase tracking-widest text-[#c4c7c8]">
                            Productos
                        </th>

                        <th className="p-4 md:px-6 text-xs uppercase tracking-widest text-[#c4c7c8] text-right">
                            Acciones
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-white/5">

                    {loading ? (
                        <tr>
                            <td
                                colSpan={3}
                                className="p-10 text-center text-[#c4c7c8]"
                            >
                                Cargando categorias...
                            </td>
                        </tr>
                    ) : (
                        categories.map((category) => (
                            <tr
                                key={category.id}
                                className="
                                    hover:bg-white/5
                                    transition-colors
                                    group
                                "
                            >
                                {/* NAME */}
                                <td className="p-4 md:px-6 text-base md:text-lg text-white">
                                    {category.nombre}
                                </td>

                                {/* PRODUCTS */}
                                <td className="p-4 md:px-6 text-[#c4c7c8]">
                                    {category.productos_count}
                                </td>

                                {/* ACTIONS */}
                                <td className="p-4 md:px-6 text-right">
                                    <div
                                        className="
                                            flex
                                            justify-end
                                            gap-2
                                            md:gap-3
                                            opacity-50
                                            group-hover:opacity-100
                                            transition-opacity
                                        "
                                    >
                                        {/* EDIT */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                onEdit(category)
                                            }
                                            className="
                                                p-2
                                                text-[#c4c7c8]
                                                hover:text-white
                                                transition-colors
                                            "
                                            title="Edit category"
                                        >
                                            <span className="material-symbols-outlined text-[20px]">
                                                edit
                                            </span>
                                        </button>

                                        {/* DELETE */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                onDelete(category)
                                            }
                                            className="
                                                p-2
                                                text-[#c4c7c8]
                                                hover:text-[#ffb4ab]
                                                transition-colors
                                            "
                                            title="Delete category"
                                        >
                                            <span className="material-symbols-outlined text-[20px]">
                                                delete
                                            </span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}

                    {/* NO RESULTS */}
                    {!loading && categories.length === 0 && (
                        <tr>
                            <td
                                colSpan={3}
                                className="
                                    p-10
                                    text-center
                                    text-[#c4c7c8]
                                "
                            >
                                No categories found.
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    );
}

export default CategoryTable;