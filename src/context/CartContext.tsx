import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

import CartService from "../services/CartService";

import type {
    CartItem,
} from "../types/cart.type";

interface CartContextType {
    items: CartItem[];
    cartCount: number;
    cartTotal: number;
    loading: boolean;

    addToCart: (
        producto_id: number,
        producto_variante_id?: number | null,
        quantity?: number
    ) => Promise<void>;

    increaseQuantity: (
        itemId: number
    ) => Promise<void>;

    decreaseQuantity: (
        itemId: number
    ) => Promise<void>;

    removeFromCart: (
        itemId: number
    ) => Promise<void>;

    clearCart: () => Promise<void>;

    refreshCart: () => Promise<void>;

    resetCart: () => void;
}
const CartContext = createContext<
    CartContextType | undefined
>(undefined);

export const CartProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(false);

    // =====================================================
    // OBTENER CARRITO
    // =====================================================

    const refreshCart = async () => {
        try {
            setLoading(true);

            const response =
                await CartService.getMyCart();

            setItems(response.data.items ?? []);
        } catch (error) {
            console.error(
                "Error al obtener carrito:",
                error
            );

            setItems([]);
        } finally {
            setLoading(false);
        }
    };
const resetCart = () => {
    setItems([]);
};
    // =====================================================
    // CARGAR CARRITO AL INICIAR
    // =====================================================

  useEffect(() => {
    const handleAuthChanged = () => {
        const token = localStorage.getItem("token");

        if (token) {
            refreshCart();
        } else {
            setItems([]);
        }
    };

    window.addEventListener(
        "auth-changed",
        handleAuthChanged
    );

    return () => {
        window.removeEventListener(
            "auth-changed",
            handleAuthChanged
        );
    };
}, []);
    // =====================================================
    // AGREGAR
    // =====================================================

    const addToCart = async (
        producto_id: number,
        producto_variante_id: number | null = null,
        quantity: number = 1
    ) => {
        try {
            setLoading(true);

            await CartService.addItem({
                producto_id,
                producto_variante_id,
                quantity,
            });

            // Volvemos a pedir el carrito
            // para obtener el estado real del backend.
            await refreshCart();
        } catch (error) {
            console.error(
                "Error al agregar al carrito:",
                error
            );

            throw error;
        } finally {
            setLoading(false);
        }
    };

    // =====================================================
    // AUMENTAR
    // =====================================================

    const increaseQuantity = async (
        itemId: number
    ) => {
        try {
            const item = items.find(
                (item) => item.id === itemId
            );

            if (!item) return;

            const currentQuantity =
                Number(item.quantity) || 0;

            setLoading(true);

            await CartService.updateQuantity(
                itemId,
                currentQuantity + 1
            );

            await refreshCart();
        } catch (error) {
            console.error(
                "Error al aumentar cantidad:",
                error
            );

            throw error;
        } finally {
            setLoading(false);
        }
    };

    // =====================================================
    // DISMINUIR
    // =====================================================

    const decreaseQuantity = async (
        itemId: number
    ) => {
        try {
            const item = items.find(
                (item) => item.id === itemId
            );

            if (!item) return;

            const currentQuantity =
                Number(item.quantity) || 0;

            setLoading(true);

            // Si tiene 1, eliminamos el producto
            if (currentQuantity <= 1) {
                await CartService.deleteItem(itemId);
            } else {
                await CartService.updateQuantity(
                    itemId,
                    currentQuantity - 1
                );
            }

            await refreshCart();
        } catch (error) {
            console.error(
                "Error al disminuir cantidad:",
                error
            );

            throw error;
        } finally {
            setLoading(false);
        }
    };

    // =====================================================
    // ELIMINAR
    // =====================================================

    const removeFromCart = async (
        itemId: number
    ) => {
        try {
            setLoading(true);

            await CartService.deleteItem(itemId);

            await refreshCart();
        } catch (error) {
            console.error(
                "Error al eliminar producto:",
                error
            );

            throw error;
        } finally {
            setLoading(false);
        }
    };

    // =====================================================
    // VACIAR
    // =====================================================

    const clearCart = async () => {
        try {
            setLoading(true);

            await CartService.clearCart();

            setItems([]);
        } catch (error) {
            console.error(
                "Error al vaciar carrito:",
                error
            );

            throw error;
        } finally {
            setLoading(false);
        }
    };

    // =====================================================
    // CANTIDAD TOTAL
    // =====================================================

    const cartCount = items.reduce(
        (total, item) => {
            const quantity =
                Number(item.quantity) || 0;

            return total + quantity;
        },
        0
    );

    // =====================================================
    // TOTAL
    // =====================================================

    const cartTotal = items.reduce(
        (total, item) => {
            const price =
                Number(item.producto_precio) || 0;

            const quantity =
                Number(item.quantity) || 0;

            return total + price * quantity;
        },
        0
    );

    // =====================================================
    // CONTEXT
    // =====================================================

    return (
      <CartContext.Provider
    value={{
        items,
        cartCount,
        cartTotal,
        loading,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        refreshCart,
        resetCart,
    }}
>
            {children}
        </CartContext.Provider>
    );
};

// =====================================================
// HOOK
// =====================================================

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart debe utilizarse dentro de CartProvider"
        );
    }

    return context;
};