import type { Product } from "../../../types/product.type";

const API_URL =
    import.meta.env.VITE_API_URL;


interface ProductRowProps {
    product: Product;
    onEdit: (product: Product) => void;
    onDelete: (product: Product) => void;
}

function ProductRow({
    product,
    onEdit,
    onDelete,
}: ProductRowProps) {

    return (
        <tr className="hover:bg-white/5 transition-colors group">

            {/* -------------------------------------------------- */}
            {/* PRODUCTO */}
            {/* -------------------------------------------------- */}

            <td className="p-4">

                <div className="flex items-center gap-4">

                    {/* IMAGEN */}

                    <div className="w-12 h-12 bg-[#353535] border border-white/10 shrink-0 overflow-hidden">

                        {product.main_image ? (

                            <img
                                src={API_URL + product.main_image}
                                alt={product.nombre}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                            />

                        ) : (

                            <div className="w-full h-full flex items-center justify-center">

                                <span className="material-symbols-outlined text-[#777]">
                                    image
                                </span>

                            </div>
                        )}

                    </div>


                    {/* INFORMACIÓN */}

                    <div>

                        <p className="text-[18px] text-white font-medium">
                            {product.nombre}
                        </p>

                        {product.tiene_variantes && (

                            <p className="text-xs text-[#c4c7c8] mt-1">
                                {product.variantes.length}{" "}
                                {product.variantes.length === 1
                                    ? "variante"
                                    : "variantes"}
                            </p>

                        )}

                    </div>

                </div>

            </td>


            {/* -------------------------------------------------- */}
            {/* CATEGORÍA */}
            {/* -------------------------------------------------- */}

            <td className="p-4 text-white">

                {product.categoria_nombre}

            </td>


            {/* -------------------------------------------------- */}
            {/* PRECIO */}
            {/* -------------------------------------------------- */}

            <td className="p-4 text-lg text-white tracking-wider">

                ${Number(product.precio).toFixed(2)}

            </td>


            {/* -------------------------------------------------- */}
            {/* STOCK */}
            {/* -------------------------------------------------- */}

            <td className="p-4">

                <span
                    className={
                        product.stock > 0
                            ? "text-white"
                            : "text-red-400"
                    }
                >
                    {product.stock}
                </span>

            </td>


            {/* -------------------------------------------------- */}
            {/* ACCIONES */}
            {/* -------------------------------------------------- */}

            <td className="p-4 text-right">

                <div className="flex items-center justify-end gap-2 opacity-50 group-hover:opacity-100 transition-opacity">

                    {/* EDITAR */}

                    <button
                        type="button"
                        onClick={() => onEdit(product)}
                        className="p-2 hover:text-white text-[#c4c7c8] transition-colors"
                        title="Editar producto"
                    >

                        <span className="material-symbols-outlined text-[20px]">
                            edit
                        </span>

                    </button>


                    {/* ELIMINAR */}

                    <button
                        type="button"
                        onClick={() => onDelete(product)}
                        className="p-2 hover:text-[#ffb4ab] text-[#c4c7c8] transition-colors"
                        title="Eliminar producto"
                    >

                        <span className="material-symbols-outlined text-[20px]">
                            delete
                        </span>

                    </button>

                </div>

            </td>

        </tr>
    );
}

export default ProductRow;