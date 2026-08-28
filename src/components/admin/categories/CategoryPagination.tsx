import type { CategoryPaginationProps } from "../../../types/category.type";

function CategoryPagination({
    currentPage,
    totalPages,
    totalCategories,
    currentCount,
    loading,
    onPrevious,
    onNext
}: CategoryPaginationProps) {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 border-t border-white/10 pt-6">

            {/* TOTAL */}
            <p className="text-xs text-[#c4c7c8]">
                Mostrando{" "}
                {currentCount}{" "}
                de{" "}
                {totalCategories}{" "}
                categorias
            </p>

            {/* CONTROLS */}
            <div className="flex items-center gap-2">

                {/* PREVIOUS */}
                <button
                    type="button"
                    onClick={onPrevious}
                    disabled={currentPage === 1 || loading}
                    className="
                        px-4
                        py-2
                        border
                        border-white/15
                        text-[#c4c7c8]
                        hover:text-white
                        hover:bg-white/5
                        transition-colors
                        disabled:opacity-30
                        disabled:cursor-not-allowed
                    "
                >
                    <span className="material-symbols-outlined text-[18px] align-middle">
                        chevron_left
                    </span>
                </button>

                {/* PAGE */}
                <span className="px-4 py-2 text-sm text-white">
                    {currentPage}

                    <span className="text-[#c4c7c8]">
                        {" "}de{" "}
                    </span>

                    {totalPages}
                </span>

                {/* NEXT */}
                <button
                    type="button"
                    onClick={onNext}
                    disabled={
                        currentPage === totalPages ||
                        loading
                    }
                    className="
                        px-4
                        py-2
                        border
                        border-white/15
                        text-[#c4c7c8]
                        hover:text-white
                        hover:bg-white/5
                        transition-colors
                        disabled:opacity-30
                        disabled:cursor-not-allowed
                    "
                >
                    <span className="material-symbols-outlined text-[18px] align-middle">
                        chevron_right
                    </span>
                </button>

            </div>
        </div>
    );
}

export default CategoryPagination;