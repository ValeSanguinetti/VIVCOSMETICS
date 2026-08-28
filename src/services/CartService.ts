import type {
    CartResponse,
    CartItem,
} from "../types/cart.type";

const API_URL = import.meta.env.VITE_API_URL;

class CartService {
    private getHeaders() {
        const token = localStorage.getItem("token");

        return {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
    }

    // =====================================================
    // OBTENER MI CARRITO
    // GET /cart
    // =====================================================

    async getMyCart(): Promise<CartResponse> {
        const response = await fetch(
            `${API_URL}/cart`,
            {
                method: "GET",
                headers: this.getHeaders(),
            }
        );

        if (!response.ok) {
            throw new Error(
                "No se pudo obtener el carrito"
            );
        }

        return response.json();
    }

    // =====================================================
    // AGREGAR ITEM
    // POST /cart/items
    // =====================================================

    async addItem(data: {
        producto_id: number;
        producto_variante_id?: number | null;
        quantity: number;
    }): Promise<CartItem> {
        const response = await fetch(
            `${API_URL}/cart/items`,
            {
                method: "POST",
                headers: this.getHeaders(),
                body: JSON.stringify(data),
            }
        );

        if (!response.ok) {
            throw new Error(
                "No se pudo agregar el producto al carrito"
            );
        }

        return response.json();
    }

    // =====================================================
    // ACTUALIZAR CANTIDAD
    // PUT /cart/items/:id
    // =====================================================

    async updateQuantity(
        itemId: number,
        quantity: number
    ): Promise<CartItem> {
        const response = await fetch(
            `${API_URL}/cart/items/${itemId}`,
            {
                method: "PUT",
                headers: this.getHeaders(),
                body: JSON.stringify({
                    quantity,
                }),
            }
        );

        if (!response.ok) {
            throw new Error(
                "No se pudo actualizar la cantidad"
            );
        }

        return response.json();
    }

    // =====================================================
    // ELIMINAR ITEM
    // DELETE /cart/items/:id
    // =====================================================

    async deleteItem(itemId: number): Promise<void> {
        const response = await fetch(
            `${API_URL}/cart/items/${itemId}`,
            {
                method: "DELETE",
                headers: this.getHeaders(),
            }
        );

        if (!response.ok) {
            throw new Error(
                "No se pudo eliminar el producto"
            );
        }
    }

    // =====================================================
    // VACIAR CARRITO
    // DELETE /cart
    // =====================================================

    async clearCart(): Promise<void> {
        const response = await fetch(
            `${API_URL}/cart`,
            {
                method: "DELETE",
                headers: this.getHeaders(),
            }
        );

        if (!response.ok) {
            throw new Error(
                "No se pudo vaciar el carrito"
            );
        }
    }
}

export default new CartService();