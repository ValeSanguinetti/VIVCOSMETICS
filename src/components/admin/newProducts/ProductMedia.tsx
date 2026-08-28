import {
    useEffect,
    useState
} from "react";
import type {
    ProductImage
} from "../../../types/product.type";

const API_URL =
    import.meta.env.VITE_API_URL;

interface ProductMediaProps {
    images: File[];
    existingImages: ProductImage[];
    onImagesChange: (
        images: File[]
    ) => void;
    onRemoveExistingImage: (imageId: number) => void;
}

function ProductMedia({
    images,
    existingImages,
    onImagesChange,
    onRemoveExistingImage,
}: ProductMediaProps) {

    const [previews, setPreviews] = useState<
        { file: File; url: string }[]
    >([]);

    // --------------------------------------------------
    // GENERAR VISTAS PREVIAS DE NUEVAS IMÁGENES
    // --------------------------------------------------

    useEffect(() => {

        const newPreviews = images.map(
            (file) => ({
                file,
                url: URL.createObjectURL(file),
            })
        );

        setPreviews(newPreviews);

        return () => {

            newPreviews.forEach(
                (preview) => {
                    URL.revokeObjectURL(
                        preview.url
                    );
                }
            );

        };

    }, [images]);

    // --------------------------------------------------
    // SELECCIONAR IMÁGENES
    // --------------------------------------------------

    const handleFileChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {

        const files = event.target.files
            ? Array.from(event.target.files)
            : [];

        if (files.length === 0) {
            return;
        }

        onImagesChange([
            ...images,
            ...files,
        ]);

        event.target.value = "";
    };

    // --------------------------------------------------
    // ELIMINAR IMAGEN NUEVA
    // --------------------------------------------------

    const removeImage = (
        index: number
    ) => {

        onImagesChange(
            images.filter(
                (_, i) => i !== index
            )
        );

    };

    return (

        <section className="bg-[#0e0e0e] border border-white/10 p-8 rounded-none">

            {/* HEADER */}

            <h3 className="text-2xl text-white font-medium mb-6">
                Media
            </h3>

            {/* UPLOAD */}

            <label
                htmlFor="product-images"
                className="border-2 border-dashed border-white/20 p-12 flex flex-col items-center justify-center text-center cursor-pointer hover:border-white/40 transition-colors group"
            >

                <div className="w-16 h-16 rounded-full bg-[#2a2a2a] flex items-center justify-center mb-4 group-hover:bg-white/5 transition-colors">

                    <span className="material-symbols-outlined text-white text-2xl">
                        cloud_upload
                    </span>

                </div>

                <p className="text-lg text-white mb-2">
                    Arrastra y suelta imágenes aquí
                </p>

                <p className="text-xs text-[#c4c7c8] uppercase tracking-wider">
                    o haz clic para seleccionar archivos
                </p>

                <input
                    id="product-images"
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleFileChange}
                />

            </label>

            {/* -------------------------------------------------- */}
            {/* IMÁGENES EXISTENTES */}
            {/* -------------------------------------------------- */}

            {existingImages.length > 0 && (

                <div className="mt-6">

                    <p className="text-xs text-[#c4c7c8] uppercase tracking-wider mb-3">
                        Imágenes actuales
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                        {existingImages.map(
                            (image) => (

                                <div
                                    key={image.id}
                                    className="relative border border-white/10 group overflow-hidden"
                                >

                                    <img
                                        src={API_URL + image.imageurl}
                                        alt="Product"
                                        className="w-full aspect-square object-cover"
                                    />

                                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-3 py-2">

                                        <p className="text-[10px] text-white">
                                            Imagen actual
                                        </p>

                                    </div>

                                    {image.id !== undefined && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                onRemoveExistingImage(image.id!)
                                            }
                                            className="absolute top-2 right-2 w-7 h-7 bg-black/80 text-white text-sm hover:bg-red-500 transition-colors"
                                        >
                                            X
                                        </button>
                                    )}

                                </div>

                            )
                        )}

                    </div>

                </div>

            )}

            {/* -------------------------------------------------- */}
            {/* NUEVAS IMÁGENES */}
            {/* -------------------------------------------------- */}

            {previews.length > 0 && (

                <div className="mt-6">

                    <p className="text-xs text-[#c4c7c8] uppercase tracking-wider mb-3">
                        Nuevas imágenes seleccionadas
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                        {previews.map(
                            (
                                preview,
                                index
                            ) => (

                                <div
                                    key={`${preview.file.name}-${index}`}
                                    className="relative border border-white/10 group overflow-hidden"
                                >

                                    <img
                                        src={preview.url}
                                        alt={preview.file.name}
                                        className="w-full aspect-square object-cover"
                                    />

                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            removeImage(index)
                                        }
                                        className="absolute top-2 right-2 w-7 h-7 bg-black/80 text-white text-sm hover:bg-red-500 transition-colors"
                                    >
                                        ×
                                    </button>

                                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity">

                                        <p className="text-[10px] text-white truncate">
                                            {preview.file.name}
                                        </p>

                                    </div>

                                </div>

                            )
                        )}

                    </div>

                </div>

            )}

            {/* -------------------------------------------------- */}
            {/* SIN IMÁGENES */}
            {/* -------------------------------------------------- */}

            {existingImages.length === 0 &&
                images.length === 0 && (

                    <p className="text-xs text-[#c4c7c8]/50 mt-4 text-center">
                        No hay imágenes seleccionadas
                    </p>

                )}

        </section>

    );
}

export default ProductMedia;
