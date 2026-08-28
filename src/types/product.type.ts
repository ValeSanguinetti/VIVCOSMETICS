// --------------------------------------------------
// IMAGEN
// --------------------------------------------------

export interface ProductImage {
    id?: number;
    producto_id?: number;
    variante_id?: number | null;
    imageurl: string;
    orden: number;
}


// --------------------------------------------------
// VARIANTE
// --------------------------------------------------
export interface ProductVariant {
    id?: number;
    producto_id?: number;
    nombre: string;
    codigo_color: string | null;
    stock: number;

    imagenes?: File[];
    imagenes_existentes?: ProductImage[];
    imagenes_eliminadas?: number[];
}
export interface ProductVariantForm {
    id?: number;
    nombre: string;
    codigo_color: string | null;
    stock: number;
    imagenes: ProductImage[];
}
export interface ProductVariantResponse {
    id: number;
    producto_id: number;
    nombre: string;
    codigo_color: string | null;
    stock: number;
    imagenes: ProductImage[];
}

// --------------------------------------------------
// PRODUCTO
// --------------------------------------------------
export interface Product {
    id: number;
    nombre: string;
    categoria_id: number;
    precio: number;
    stock: number;
    descripcion: string | null;
    slug: string;
    categoria_nombre: string;
    categoria_slug: string;
    variantes: ProductVariantResponse[];
    tiene_variantes: boolean;
    imagenes: ProductImage[];
    main_image: string | null;
}

// --------------------------------------------------
// DATOS PARA CREAR / ACTUALIZAR
// --------------------------------------------------

export interface ProductData {

    nombre: string;

    categoria_id: number;

    precio: number;

    stock: number;

    descripcion?: string | null;

    imagenes?: File[];
    imagenes_eliminadas?: number[];

    variantes?: ProductVariant[];
}


// --------------------------------------------------
// RESPUESTA PRODUCTO
// --------------------------------------------------

export interface ProductResponse {

    success: boolean;

    message?: string;

    data?: Product;

}


// --------------------------------------------------
// RESPUESTA PRODUCTOS
// --------------------------------------------------

export interface ProductsResponse {

    success: boolean;

    message?: string;

    data?: {

        products: Product[];

        pagination: {

            total: number;

            current_page: number;

            per_page: number;

            total_pages: number;

        };

    };

}
