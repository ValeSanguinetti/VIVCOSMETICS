import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";

interface CartSidebarProps {
    isCartOpen: boolean;
    closeCart: () => void;
}

function CartSidebar({
    isCartOpen,
    closeCart,
}: CartSidebarProps) {
    const {
    items,
    cartCount,
    cartTotal,
    clearCart,
} = useCart();
const whatsappUrl = "https://wa.me/59897400905";

const handleCheckout = async () => {
    const orderDetails = items
    .map((item) => {
        const quantity = Number(item.quantity) || 1;
        const price = Number(item.producto_precio) || 0;
        const subtotal = price * quantity;

        const variante = item.variante_nombre
            ? ` — Variante: ${item.variante_nombre}`
            : "";

        return `• ${item.producto_nombre}${variante} — Cantidad: ${quantity} — $${subtotal.toFixed(2)}`;
    })
    .join("\n");

    const message = `Hola, quiero realizar el siguiente pedido:

${orderDetails}

Total: $${Number(cartTotal ?? 0).toFixed(2)}

¡Gracias!`;

    const url = `${whatsappUrl}?text=${encodeURIComponent(message)}`;

    // Abrimos WhatsApp
    window.open(url, "_blank");

    try {
        // Vaciamos el carrito del backend y del contexto
        await clearCart();

        // Cerramos el carrito
        closeCart();
    } catch (error) {
        console.error(
            "No se pudo vaciar el carrito después del pedido:",
            error
        );
    }
};
    return (
        <>
            {/* OVERLAY */}

            {isCartOpen && (
                <div
                    className="
                        fixed
                        inset-0
                        z-[100]
                        bg-black/50
                        backdrop-blur-sm
                    "
                    onClick={closeCart}
                />
            )}

            {/* SIDEBAR */}

            <aside
                className={`
                    fixed
                    top-0
                    right-0
                    h-full
                    w-full
                    sm:w-[420px]
                    z-[110]
                    bg-[#131313]
                    border-l
                    border-white/10
                    shadow-2xl
                    flex
                    flex-col
                    transition-transform
                    duration-500
                    ease-out

                    ${
                        isCartOpen
                            ? "translate-x-0"
                            : "translate-x-full"
                    }
                `}
            >
                {/* HEADER */}

                <div
                    className="
                        h-20
                        px-6
                        border-b
                        border-white/10
                        flex
                        items-center
                        justify-between
                        shrink-0
                    "
                >
                    <div>
                        <h2
                            className="
                                text-white
                                text-lg
                                uppercase
                                tracking-widest
                            "
                        >
                            Tu carrito
                        </h2>

                        <p
                            className="
                                text-xs
                                text-[#8e9192]
                                mt-1
                            "
                        >
                            {cartCount}{" "}
                            {cartCount === 1
                                ? "producto"
                                : "productos"}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={closeCart}
                        aria-label="Cerrar carrito"
                        className="
                            text-[#8e9192]
                            hover:text-white
                            transition-colors
                        "
                    >
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </button>
                </div>

                {/* PRODUCTOS */}

                <div
                    className="
                        flex-1
                        overflow-y-auto
                        px-6
                        py-6
                    "
                >
                    {items.length === 0 ? (
                        <EmptyCart />
                    ) : (
                        <div className="space-y-6">
                            {items.map((item) => (
                                <CartItem
                                    key={`${item.id}-${item.producto_variante_id ?? "base"}`}
                                    item={item}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* FOOTER */}

                {items.length > 0 && (
                    <div
                        className="
                            border-t
                            border-white/10
                            px-6
                            py-6
                            shrink-0
                        "
                    >
                        <div
                            className="
                                flex
                                justify-between
                                items-center
                                mb-6
                            "
                        >
                            <span
                                className="
                                    text-sm
                                    uppercase
                                    tracking-widest
                                    text-[#8e9192]
                                "
                            >
                                Total
                            </span>

                            <span
                                className="
                                    text-xl
                                    text-white
                                "
                            >
                                $ {Number(
                                    cartTotal ?? 0
                                ).toFixed(2)}
                            </span>
                        </div>

                        <button
    type="button"
    onClick={handleCheckout}
    className="
        w-full
        bg-white
        text-black
        py-4
        uppercase
        tracking-widest
        text-sm
        hover:bg-[#e5e2e1]
        transition-colors
    "
>
    Finalizar compra
</button>
                    </div>
                )}
            </aside>
        </>
    );
}

function EmptyCart() {
    return (
        <div
            className="
                h-full
                flex
                flex-col
                items-center
                justify-center
                text-center
                px-6
            "
        >
            <span
                className="
                    material-symbols-outlined
                    text-5xl
                    text-[#555]
                    mb-4
                "
            >
                shopping_bag
            </span>

            <h3
                className="
                    text-white
                    uppercase
                    tracking-widest
                    text-sm
                "
            >
                Tu carrito está vacío
            </h3>

            <p
                className="
                    text-[#8e9192]
                    text-sm
                    mt-2
                "
            >
                Agrega productos para comenzar tu compra.
            </p>
        </div>
    );
}

export default CartSidebar;