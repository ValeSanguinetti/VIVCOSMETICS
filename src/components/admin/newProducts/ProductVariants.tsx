import type { ProductVariant } from "../../../types/product.type";

const API_URL =
    import.meta.env.VITE_API_URL;

interface ProductVariantsProps {
    variantes: ProductVariant[];
    onChange: (variantes: ProductVariant[]) => void;
}

const isFile = (value: unknown): value is File =>
    value instanceof File;

function ProductVariants({
    variantes,
    onChange,
}: ProductVariantsProps) {

    // --------------------------------------------------
    // AGREGAR VARIANTE
    // --------------------------------------------------

    const addVariant = () => {
        onChange([
            ...variantes,
            {
                nombre: "",
                codigo_color: null,
                stock: 0,
                imagenes: [],
                imagenes_existentes: [],
            },
        ]);
    };

    // --------------------------------------------------
    // ACTUALIZAR VARIANTE
    // --------------------------------------------------

    const updateVariant = (
        index: number,
        field: keyof ProductVariant,
        value: string | number | null | File[]
    ) => {
        const updated = [...variantes];

        updated[index] = {
            ...updated[index],
            [field]: value,
        };

        onChange(updated);
    };

    // --------------------------------------------------
    // ELIMINAR VARIANTE
    // --------------------------------------------------

    const removeVariant = (index: number) => {
        onChange(
            variantes.filter((_, i) => i !== index)
        );
    };

    // --------------------------------------------------
    // AGREGAR IMÁGENES NUEVAS
    // --------------------------------------------------

    const handleImagesChange = (
        index: number,
        files: File[]
    ) => {
        const updated = [...variantes];

        updated[index] = {
            ...updated[index],
            imagenes: files,
        };

        onChange(updated);
    };

    // --------------------------------------------------
    // ELIMINAR IMAGEN EXISTENTE
    // --------------------------------------------------

    const removeExistingImage = (
        variantIndex: number,
        imageIndex: number
    ) => {
        const updated = [...variantes];

        const existingImages =
            updated[variantIndex].imagenes_existentes ?? [];

        const removedImage = existingImages[imageIndex];

        updated[variantIndex] = {
            ...updated[variantIndex],
            imagenes_existentes: existingImages.filter(
                (_, i) => i !== imageIndex
            ),
            imagenes_eliminadas: removedImage?.id === undefined
                ? updated[variantIndex].imagenes_eliminadas ?? []
                : [
                    ...(updated[variantIndex].imagenes_eliminadas ?? []),
                    removedImage.id,
                ],
        };

        onChange(updated);
    };

    // --------------------------------------------------
    // ELIMINAR IMAGEN NUEVA
    // --------------------------------------------------

    const removeNewImage = (
        variantIndex: number,
        imageIndex: number
    ) => {
        const updated = [...variantes];

        const newImages =
            updated[variantIndex].imagenes ?? [];

        updated[variantIndex] = {
            ...updated[variantIndex],
            imagenes: newImages.filter(
                (_, i) => i !== imageIndex
            ),
        };

        onChange(updated);
    };

    // --------------------------------------------------
    // RENDER
    // --------------------------------------------------

    return (
        <section className="bg-[#0e0e0e] border border-white/10 p-8 rounded-none">

            {/* HEADER */}

            <div className="flex items-center justify-between mb-6">

                <h3 className="text-2xl text-white font-medium">
                    Variantes
                </h3>

                <button
                    type="button"
                    onClick={addVariant}
                    className="px-4 py-2 border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white/5 transition-colors"
                >
                    + Agregar variante
                </button>

            </div>

            {/* SIN VARIANTES */}

            {variantes.length === 0 ? (

                <div className="border border-dashed border-white/10 p-8 text-center">

                    <p className="text-sm text-[#c4c7c8]">
                        Este producto no tiene variantes.
                    </p>

                    <p className="text-xs text-[#c4c7c8]/50 mt-2">
                        Puedes agregar variantes como colores,
                        tamaños o presentaciones.
                    </p>

                </div>

            ) : (

                <div className="space-y-4">

                    {variantes.map(
                        (variante, index) => (

                            <div
                                key={variante.id ?? index}
                                className="border border-white/10 p-5"
                            >

                                {/* VARIANT HEADER */}

                                <div className="flex justify-between items-center mb-5">

                                    <span className="text-xs text-[#c4c7c8] uppercase tracking-wider">
                                        Variant {index + 1}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            removeVariant(index)
                                        }
                                        className="text-xs text-red-400 hover:text-red-300 uppercase tracking-wider"
                                    >
                                        Eliminar
                                    </button>

                                </div>

                                {/* FIELDS */}

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                                    {/* NAME */}

                                    <div>

                                        <label className="block text-xs text-[#c4c7c8] uppercase tracking-wider mb-2">
                                            Nombre
                                        </label>

                                        <input
                                            type="text"
                                            value={variante.nombre}
                                            onChange={(e) =>
                                                updateVariant(
                                                    index,
                                                    "nombre",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="e.g. Pink"
                                            className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors placeholder:text-[#c4c7c8]/30"
                                        />

                                    </div>

                                    {/* COLOR */}

                                    <div>

                                        <label className="block text-xs text-[#c4c7c8] uppercase tracking-wider mb-2">
                                            Color
                                        </label>

                                        <label className="relative flex items-center gap-3 w-full border border-white/20 px-3 py-2 cursor-pointer hover:border-white/40 transition-colors">

                                            <span
                                                className="w-9 h-9 shrink-0 border border-white/20"
                                                style={{
                                                    backgroundColor:
                                                        variante.codigo_color ??
                                                        "#000000",
                                                }}
                                            />

                                            <span className="text-sm text-white flex-1">
                                                {variante.codigo_color ??
                                                    "#000000"}
                                            </span>

                                            <input
                                                type="color"
                                                value={
                                                    variante.codigo_color ??
                                                    "#000000"
                                                }
                                                onChange={(e) =>
                                                    updateVariant(
                                                        index,
                                                        "codigo_color",
                                                        e.target.value
                                                    )
                                                }
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            />

                                        </label>

                                    </div>

                                    {/* STOCK */}

                                    <div>

                                        <label className="block text-xs text-[#c4c7c8] uppercase tracking-wider mb-2">
                                            Stock
                                        </label>

                                        <input
                                            type="number"
                                            min="0"
                                            value={variante.stock}
                                            onChange={(e) =>
                                                updateVariant(
                                                    index,
                                                    "stock",
                                                    Number(
                                                        e.target.value
                                                    ) || 0
                                                )
                                            }
                                            className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors"
                                        />

                                    </div>

                                </div>

                                {/* --------------------------------------------------
                                    IMÁGENES
                                -------------------------------------------------- */}

                                <div className="mt-6">

                                    <label className="block text-xs text-[#c4c7c8] uppercase tracking-wider mb-3">
                                        Variant Images
                                    </label>

                                    {/* --------------------------------------------------
                                        IMÁGENES EXISTENTES
                                    -------------------------------------------------- */}

                                    {(
                                        variante.imagenes_existentes?.length ??
                                        0
                                    ) > 0 && (

                                        <div className="mb-5">

                                            <p className="text-xs text-[#c4c7c8]/60 uppercase tracking-wider mb-3">
                                                Imagenes existentes
                                            </p>

                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

                                                {variante.imagenes_existentes?.map(
                                                    (
                                                        image,
                                                        imageIndex
                                                    ) => (

                                                        <div
                                                            key={`existing-${image.id ?? image.imageurl ?? imageIndex}`}
                                                            className="relative border border-white/10"
                                                        >

                                                            <img
                                                                src={
                                                                    API_URL + image.imageurl
                                                                }
                                                                alt={`Variant image ${
                                                                    imageIndex +
                                                                    1
                                                                }`}
                                                                className="w-full aspect-square object-cover"
                                                            />

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    removeExistingImage(
                                                                        index,
                                                                        imageIndex
                                                                    )
                                                                }
                                                                className="absolute top-2 right-2 w-7 h-7 bg-black/80 text-white hover:bg-red-500 transition-colors"
                                                            >
                                                                ×
                                                            </button>

                                                        </div>

                                                    )
                                                )}

                                            </div>

                                        </div>

                                    )}

                                    {/* --------------------------------------------------
                                        AGREGAR NUEVAS IMÁGENES
                                    -------------------------------------------------- */}

                                    <label
                                        htmlFor={`variant-images-${index}`}
                                        className="border border-dashed border-white/10 p-5 flex items-center justify-center cursor-pointer hover:border-white/30 transition-colors"
                                    >

                                        <span className="text-xs text-[#c4c7c8] uppercase tracking-wider">
                                            + Agregar imágenes
                                        </span>

                                        <input
                                            id={`variant-images-${index}`}
                                            type="file"
                                            accept="image/*"
                                            multiple
                                            className="hidden"
                                            onChange={(e) => {

                                                const files =
                                                    e.target.files
                                                        ? Array.from(
                                                              e.target.files
                                                          )
                                                        : [];

                                                if (
                                                    files.length ===
                                                    0
                                                ) {
                                                    return;
                                                }

                                                handleImagesChange(
                                                    index,
                                                    [
                                                        ...(variante.imagenes ??
                                                            []).filter(isFile),
                                                        ...files,
                                                    ]
                                                );

                                                e.target.value = "";
                                            }}
                                        />

                                    </label>

                                    {/* --------------------------------------------------
                                        IMÁGENES NUEVAS
                                    -------------------------------------------------- */}

                                    {(
                                        variante.imagenes?.filter(isFile)
                                            .length ??
                                        0
                                    ) > 0 && (

                                        <div className="mt-4">

                                            <p className="text-xs text-[#c4c7c8]/60 uppercase tracking-wider mb-3">
                                                Nuevas imágenes
                                            </p>

                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

                                                {variante.imagenes
                                                    ?.filter(isFile)
                                                    .map(
                                                    (
                                                        file,
                                                        imageIndex
                                                    ) => (

                                                        <div
                                                            key={`${file.name}-${imageIndex}`}
                                                            className="relative border border-white/10"
                                                        >

                                                            <img
                                                                src={URL.createObjectURL(
                                                                    file
                                                                )}
                                                                alt={
                                                                    file.name
                                                                }
                                                                className="w-full aspect-square object-cover"
                                                            />

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    removeNewImage(
                                                                        index,
                                                                        imageIndex
                                                                    )
                                                                }
                                                                className="absolute top-2 right-2 w-7 h-7 bg-black/80 text-white hover:bg-red-500 transition-colors"
                                                            >
                                                                ×
                                                            </button>

                                                        </div>

                                                    )
                                                )}

                                            </div>

                                        </div>

                                    )}

                                </div>

                            </div>

                        )
                    )}

                </div>

            )}

        </section>
    );
}

export default ProductVariants;
