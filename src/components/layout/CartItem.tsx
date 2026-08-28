import { useCart } from "../../context/CartContext";
import type { CartItem as CartItemType } from "../../types/cart.type";

const API_URL = import.meta.env.VITE_API_URL;

interface CartItemProps {
    item: CartItemType;
}

function CartItem({ item }: CartItemProps) {
    const {
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    return (
        <div
            className="
                flex
                gap-4
                pb-6
                border-b
                border-white/10
            "
        >
            {/* IMAGEN */}

            <div
                className="
                    w-24
                    h-28
                    shrink-0
                    bg-[#0e0e0e]
                    overflow-hidden
                "
            >
                {item.image ? (
                    <img
                        src={`${API_URL}/${item.image}`}
                        alt={item.producto_nombre}
                        className="
                            w-full
                            h-full
                            object-cover
                        "
                    />
                ) : (
                    <div
                        className="
                            w-full
                            h-full
                            flex
                            items-center
                            justify-center
                            text-[#555]
                        "
                    >
                        <span
                            className="
                                material-symbols-outlined
                                text-3xl
                            "
                        >
                            image
                        </span>
                    </div>
                )}
            </div>

            {/* INFO */}

            <div className="flex-1 min-w-0">

                <div
                    className="
                        flex
                        justify-between
                        gap-3
                    "
                >
                    <div className="min-w-0">

                        <h3
                            className="
                                text-white
                                text-sm
                                uppercase
                                tracking-wide
                                truncate
                            "
                        >
                            {item.producto_nombre}
                        </h3>

                        <p
                            className="
                                text-[#c4c7c8]
                                text-sm
                                mt-2
                            "
                        >
                            $ {Number(
                                item.producto_precio ?? 0
                            ).toFixed(2)}
                        </p>

                    </div>

                    {/* ELIMINAR */}

                    <button
                        type="button"
                        aria-label="Eliminar producto"
                        onClick={() =>
                            removeFromCart(item.id)
                        }
                        className="
                            text-[#777]
                            hover:text-red-400
                            transition-colors
                            shrink-0
                        "
                    >
                        <span
                            className="
                                material-symbols-outlined
                                text-lg
                            "
                        >
                            close
                        </span>
                    </button>
                </div>

                {/* VARIANTE */}

                {item.variante_nombre && (
                    <p
                        className="
                            text-xs
                            text-[#8e9192]
                            uppercase
                            tracking-widest
                            mt-4
                        "
                    >
                        Variante:{" "}

                        <span className="text-[#c4c7c8]">
                            {item.variante_nombre}
                        </span>
                    </p>
                )}

                {/* CANTIDAD */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        mt-5
                    "
                >
                    <span
                        className="
                            text-xs
                            uppercase
                            tracking-widest
                            text-[#8e9192]
                        "
                    >
                        Cantidad
                    </span>

                    <div
                        className="
                            flex
                            items-center
                            border
                            border-white/10
                        "
                    >
                        {/* RESTAR */}

                        <button
                            type="button"
                            onClick={() =>
                                decreaseQuantity(item.id)
                            }
                            disabled={item.quantity <= 1}
                            className="
                                w-8
                                h-8
                                flex
                                items-center
                                justify-center
                                text-[#c4c7c8]
                                hover:text-white
                                disabled:opacity-30
                                transition-colors
                            "
                        >
                            <span
                                className="
                                    material-symbols-outlined
                                    text-base
                                "
                            >
                                remove
                            </span>
                        </button>

                        {/* CANTIDAD */}

                        <span
                            className="
                                w-8
                                text-center
                                text-sm
                                text-white
                            "
                        >
                            {item.quantity}
                        </span>

                        {/* SUMAR */}

                        <button
                            type="button"
                            onClick={() =>
                                increaseQuantity(item.id)
                            }
                            className="
                                w-8
                                h-8
                                flex
                                items-center
                                justify-center
                                text-[#c4c7c8]
                                hover:text-white
                                transition-colors
                            "
                        >
                            <span
                                className="
                                    material-symbols-outlined
                                    text-base
                                "
                            >
                                add
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;