import type {
    ProductData,
    ProductResponse,
    ProductsResponse,
} from "../types/product.type";


const API_URL =
    import.meta.env.VITE_API_URL;


class ProductService {
// --------------------------------------------------
// GET ALL PRODUCTS
// --------------------------------------------------

static async getAll(
    page: number = 1,
    search: string = "",
    categoryId: string = "",
    limit: number = 12
): Promise<ProductsResponse> {
    const token =
        localStorage.getItem("token");


    const params =
        new URLSearchParams();

params.append(
    "limit",
    limit.toString()
);
    params.append(
        "page",
        page.toString()
    );


    params.append(
        "limit",
        "10"
    );


    // --------------------------------------------------
    // SEARCH
    // --------------------------------------------------

    if (search.trim()) {

        params.append(
            "search",
            search.trim()
        );
    }


    // --------------------------------------------------
    // CATEGORY
    // --------------------------------------------------

    if (categoryId) {

        params.append(
            "category_id",
            categoryId
        );
    }


    // --------------------------------------------------
    // REQUEST
    // --------------------------------------------------

    const response =
        await fetch(
            `${API_URL}/products?${params.toString()}`,
            {
                method: "GET",

                headers: {
                    ...(token && {
                        Authorization:
                            `Bearer ${token}`,
                    }),
                },
            }
        );


    const result =
        await response.json();


    if (!response.ok) {

        throw new Error(
            result.message ||
            "No se pudieron obtener los productos."
        );
    }


    return result;
}
    // --------------------------------------------------
    // GET PRODUCT BY ID
    // --------------------------------------------------

    static async getById(
        id: number
    ): Promise<ProductResponse> {

        const token =
            localStorage.getItem("token");


        const response =
            await fetch(
                `${API_URL}/products/id/${id}`,
                {
                    method: "GET",

                    headers: {
                        ...(token && {
                            Authorization:
                                `Bearer ${token}`,
                        }),
                    },
                }
            );


        const result =
            await response.json();


        if (!response.ok) {

            throw new Error(
                result.message ||
                "No se pudo obtener el producto."
            );
        }


        return result;
    }


    // --------------------------------------------------
    // GET PRODUCT BY SLUG
    // --------------------------------------------------

    static async getBySlug(
        slug: string
    ): Promise<ProductResponse> {

        const token =
            localStorage.getItem("token");


        const response =
            await fetch(
                `${API_URL}/products/${slug}`,
                {
                    method: "GET",

                    headers: {
                        ...(token && {
                            Authorization:
                                `Bearer ${token}`,
                        }),
                    },
                }
            );


        const result =
            await response.json();


        if (!response.ok) {

            throw new Error(
                result.message ||
                "No se pudo obtener el producto."
            );
        }


        return result;
    }


    // --------------------------------------------------
    // CREATE PRODUCT
    // --------------------------------------------------
static async create(
    data: ProductData
): Promise<ProductResponse> {

    const token =
        localStorage.getItem("token");


    const formData =
        new FormData();


    // --------------------------------------------------
    // DATOS BÁSICOS
    // --------------------------------------------------

    formData.append(
        "nombre",
        data.nombre
    );

    formData.append(
        "categoria_id",
        data.categoria_id.toString()
    );

    formData.append(
        "precio",
        data.precio.toString()
    );

    formData.append(
        "stock",
        data.stock.toString()
    );


    if (data.descripcion) {

        formData.append(
            "descripcion",
            data.descripcion
        );
    }


    // --------------------------------------------------
    // IMÁGENES GENERALES
    // --------------------------------------------------

    const imagenes =
        data.imagenes ?? [];

    imagenes.forEach(
        (file) => {

            formData.append(
                "imagenes[]",
                file
            );
        }
    );


    // --------------------------------------------------
    // VARIANTES
    // --------------------------------------------------

    const variantes =
        data.variantes ?? [];


    const variantesData =
        variantes.map(
            (variante) => ({

                nombre:
                    variante.nombre,

                codigo_color:
                    variante.codigo_color,

                stock:
                    variante.stock,

            })
        );


    formData.append(
        "variantes",
        JSON.stringify(
            variantesData
        )
    );


    // --------------------------------------------------
    // IMÁGENES DE VARIANTES
    // --------------------------------------------------

    variantes.forEach(
        (variante, variantIndex) => {

            const imagenesVariante =
                variante.imagenes ?? [];


            imagenesVariante.forEach(
                (file) => {

                    formData.append(
                        `variantes_imagenes[${variantIndex}][]`,
                        file
                    );

                }
            );
        }
    );


    // --------------------------------------------------
    // REQUEST
    // --------------------------------------------------

    const response =
        await fetch(
            `${API_URL}/products`,
            {
                method: "POST",

                headers: {
                    ...(token && {
                        Authorization:
                            `Bearer ${token}`,
                    }),
                },

                body: formData,
            }
        );


    const result =
        await response.json();


    if (!response.ok) {

        throw new Error(
            result.message ||
            "No se pudo crear el producto."
        );
    }


    return result;
}
    // --------------------------------------------------
    // UPDATE PRODUCT
    // --------------------------------------------------
static async update(
    id: number,
    data: ProductData
): Promise<ProductResponse> {

    const token =
        localStorage.getItem("token");


    const formData =
        new FormData();

formData.append("_method", "PUT");
    // --------------------------------------------------
    // DATOS BÁSICOS
    // --------------------------------------------------

    formData.append(
        "nombre",
        data.nombre
    );

    formData.append(
        "categoria_id",
        data.categoria_id.toString()
    );

    formData.append(
        "precio",
        data.precio.toString()
    );

    formData.append(
        "stock",
        data.stock.toString()
    );


    if (data.descripcion !== undefined) {

        formData.append(
            "descripcion",
            data.descripcion ?? ""
        );
    }


    // --------------------------------------------------
    // IMÁGENES GENERALES NUEVAS
    // --------------------------------------------------

    const imagenes =
        data.imagenes ?? [];

    formData.append(
        "imagenes_eliminadas",
        JSON.stringify(data.imagenes_eliminadas ?? [])
    );


    imagenes.forEach(
        (file) => {

            formData.append(
                "imagenes[]",
                file
            );
        }
    );


    // --------------------------------------------------
    // VARIANTES
    // --------------------------------------------------

    const variantes =
        data.variantes ?? [];


    const variantesData =
        variantes.map(
            (variante) => ({

                ...(variante.id !== undefined && {
                    id: variante.id,
                }),

                nombre:
                    variante.nombre,

                codigo_color:
                    variante.codigo_color,

                stock:
                    variante.stock,

                imagenes_eliminadas:
                    variante.imagenes_eliminadas ?? [],
            })
        );


    formData.append(
        "variantes",
        JSON.stringify(
            variantesData
        )
    );


    // --------------------------------------------------
    // IMÁGENES DE VARIANTES
    // --------------------------------------------------

    variantes.forEach(
        (variante, variantIndex) => {

            const imagenesVariante =
                variante.imagenes ?? [];


            imagenesVariante.forEach(
                (file) => {

                    formData.append(
                        `variantes_imagenes[${variantIndex}][]`,
                        file
                    );

                }
            );
        }
    );


    // --------------------------------------------------
    // REQUEST
    // --------------------------------------------------

    const response =
        await fetch(
            `${API_URL}/products/${id}`,
            {
                method: "POST",

                headers: {
                    ...(token && {
                        Authorization:
                            `Bearer ${token}`,
                    }),
                },

                body: formData,
            }
        );


    const result =
        await response.json();

    if (!response.ok) {

        throw new Error(
            result.message ||
            "No se pudo actualizar el producto."
        );
    }


    return result;
}
    // --------------------------------------------------
    // DELETE PRODUCT
    // --------------------------------------------------

    static async delete(
        id: number
    ): Promise<ProductResponse> {

        const token =
            localStorage.getItem("token");


        const response =
            await fetch(
                `${API_URL}/products/${id}`,
                {
                    method: "DELETE",

                    headers: {
                        ...(token && {
                            Authorization:
                                `Bearer ${token}`,
                        }),
                    },
                }
            );


        const result =
            await response.json();


        if (!response.ok) {

            throw new Error(
                result.message ||
                "No se pudo eliminar el producto."
            );
        }


        return result;
    }


    // --------------------------------------------------
    // GET PRODUCTS BY CATEGORY
    // --------------------------------------------------

    static async getByCategory(
        categoryId: number,
        page: number = 1,
        limit: number = 12
    ): Promise<ProductsResponse> {

        const token =
            localStorage.getItem("token");


        const response =
            await fetch(
                `${API_URL}/products/category/${categoryId}?page=${page}&limit=${limit}`,
                {
                    method: "GET",

                    headers: {
                        ...(token && {
                            Authorization:
                                `Bearer ${token}`,
                        }),
                    },
                }
            );


        const result =
            await response.json();


        if (!response.ok) {

            throw new Error(
                result.message ||
                "No se pudieron obtener los productos."
            );
        }


        return result;
    }
}


export default ProductService;
