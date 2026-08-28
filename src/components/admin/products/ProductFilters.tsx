import type { Category } from "../../../types/category.type";

interface ProductFiltersProps {
    search: string;
    category: string;
    categories: Category[];
    onSearchChange: (value: string) => void;
    onCategoryChange: (value: string) => void;
}

function ProductFilters({
    search,
    category,
    categories,
    onSearchChange,
    onCategoryChange,
}: ProductFiltersProps) {

    return (
        <div className="flex flex-col md:flex-row gap-4 mb-6">

            {/* -------------------------------------------------- */}
            {/* SEARCH */}
            {/* -------------------------------------------------- */}

            <div className="flex-1 flex items-center gap-2 bg-[#353535] px-4 py-3 border border-white/15">

                <span className="material-symbols-outlined text-[#c4c7c8]">
                    search
                </span>

                <input
                    type="text"
                    value={search}
                    onChange={(e) =>
                        onSearchChange(e.target.value)
                    }
                    placeholder="Buscar productos por nombre..."
                    className="bg-transparent border-none text-white focus:ring-0 placeholder:text-[#c4c7c8]/50 w-full outline-none"
                />

            </div>


            {/* -------------------------------------------------- */}
            {/* CATEGORY */}
            {/* -------------------------------------------------- */}

            <div className="flex gap-4">

                <select
                    value={category}
                    onChange={(e) =>
                        onCategoryChange(e.target.value)
                    }
                    className="bg-[#353535] border border-white/15 text-white px-4 py-3 uppercase text-sm focus:ring-1 focus:ring-white outline-none"
                >

                    <option value="">
                        Todas las categorías
                    </option>

                    {categories.map((categoryItem) => (

                        <option
                            key={categoryItem.id}
                            value={categoryItem.id}
                        >
                            {categoryItem.nombre}
                        </option>

                    ))}

                </select>


                {/* -------------------------------------------------- */}
                {/* FILTERS */}
                {/* -------------------------------------------------- */}

                <button
                    type="button"
                    className="bg-[#353535] border border-white/15 text-white px-4 py-3 hover:bg-white/5 transition-colors flex items-center gap-2"
                >

                    <span className="material-symbols-outlined">
                        filter_list
                    </span>

                    <span className="text-sm uppercase font-semibold">
                        Filtros
                    </span>

                </button>

            </div>

        </div>
    );
}

export default ProductFilters;