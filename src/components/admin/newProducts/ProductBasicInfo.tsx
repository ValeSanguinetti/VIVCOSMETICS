interface ProductBasicInfoProps {

    nombre: string;

    categoriaId: number | null;

    descripcion: string;

    categorias: {
        id: number;
        nombre: string;
    }[];

    onNombreChange: (value: string) => void;

    onCategoriaChange: (
        value: number | null
    ) => void;

    onDescripcionChange: (
        value: string
    ) => void;
}

function ProductBasicInfo({

    nombre,

    categoriaId,

    descripcion,

    categorias,

    onNombreChange,

    onCategoriaChange,

    onDescripcionChange,

}: ProductBasicInfoProps) {

    return (

        <section className="bg-[#0e0e0e] border border-white/10 p-8 rounded-none">

            <h3 className="text-2xl text-white font-medium mb-6">
                Información básica del producto
            </h3>


            <div className="space-y-6">

                {/* PRODUCT NAME */}

                <div>

                    <label className="block text-xs text-[#c4c7c8] uppercase tracking-wider mb-2">
                        Nombre del producto
                    </label>

                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) =>
                            onNombreChange(e.target.value)
                        }
                        placeholder="e.j. Labial de larga duración"
                        className="w-full bg-transparent border-b border-white/20 pb-2 text-white text-lg focus:outline-none focus:border-white transition-colors placeholder:text-[#c4c7c8]/30"
                    />

                </div>


                {/* CATEGORY */}

                <div>

                    <label className="block text-xs text-[#c4c7c8] uppercase tracking-wider mb-2">
                        Categoría
                    </label>

                    <select
                        value={categoriaId ?? ""}
                        onChange={(e) => {

                            const value = e.target.value;

                            onCategoriaChange(
                                value
                                    ? Number(value)
                                    : null
                            );

                        }}
                        className="w-full bg-[#0e0e0e] border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors"
                    >

                        <option
                            value=""
                            className="bg-[#131313]"
                        >
                            Selecciona una categoría
                        </option>

                        {categorias.map((categoria) => (

                            <option
                                key={categoria.id}
                                value={categoria.id}
                                className="bg-[#131313]"
                            >
                                {categoria.nombre}
                            </option>

                        ))}

                    </select>

                </div>


                {/* DESCRIPTION */}

                <div>

                    <label className="block text-xs text-[#c4c7c8] uppercase tracking-wider mb-2">
                        Descripción del producto
                    </label>

                    <textarea
                        value={descripcion}
                        onChange={(e) =>
                            onDescripcionChange(
                                e.target.value
                            )
                        }
                        placeholder="Ingresa la descripción del producto..."
                        rows={5}
                        className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-white transition-colors resize-none rounded-none placeholder:text-[#c4c7c8]/30"
                    />

                </div>

            </div>

        </section>
    );
}

export default ProductBasicInfo;