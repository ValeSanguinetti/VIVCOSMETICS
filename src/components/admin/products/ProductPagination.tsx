interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  showingFrom: number;
  showingTo: number;
  onPageChange: (page: number) => void;
}

function ProductPagination({
  currentPage,
  totalPages,
  totalProducts,
  showingFrom,
  showingTo,
  onPageChange,
}: ProductPaginationProps) {
  return (
    <div className="flex items-center justify-between mt-6 border-t border-white/10 pt-6">

      <p className="text-xs text-[#c4c7c8]">
        Mostrando {showingFrom}-{showingTo} de {totalProducts} productos
      </p>

      <div className="flex gap-2">

        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="p-2 border border-white/15 text-[#c4c7c8] hover:bg-white/5 disabled:opacity-30"
        >
          <span className="material-symbols-outlined text-[20px]">
            chevron_left
          </span>
        </button>

        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="p-2 border border-white/15 text-[#c4c7c8] hover:bg-white/5 disabled:opacity-30"
        >
          <span className="material-symbols-outlined text-[20px]">
            chevron_right
          </span>
        </button>

      </div>
    </div>
  );
}

export default ProductPagination;