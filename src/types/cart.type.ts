export interface CartItem {
    id: number;
    cart_id: number;
    producto_id: number;
    producto_variante_id: number | null;

    quantity: number;

    producto_nombre: string;
    producto_precio: number;
    producto_slug: string;

    variante_nombre: string | null;
    variante_codigo_color: string | null;
    variante_stock: number | null;

    image: string | null;
}

export interface Cart {
    id: number;
    user_id: number;
    created_at?: string;
    updated_at?: string;
}
export interface CartResponse {
    success: boolean;
    message: string;
    data: {
        cart: {
            id: number;
            user_id: number;
        };
        items: CartItem[];
    };
}