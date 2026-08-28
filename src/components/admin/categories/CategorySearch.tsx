interface CategorySearchProps {
    value: string;
    onChange: (value: string) => void;
}

function CategorySearch({
    value,
    onChange
}: CategorySearchProps) {
    return (
        <div className="flex items-center gap-2 bg-[#353535] px-4 py-3 border border-white/15 mb-6">
            <span className="material-symbols-outlined text-[#c4c7c8]">
                search
            </span>

            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Buscar categorias..."
                className="
                    bg-transparent
                    border-none
                    text-white
                    focus:ring-0
                    placeholder:text-[#c4c7c8]/50
                    w-full
                    outline-none
                "
            />
        </div>
    );
}

export default CategorySearch;