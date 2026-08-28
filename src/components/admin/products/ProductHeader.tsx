interface ProductHeaderProps {
  onAddProduct: () => void;
}

function ProductHeader({
  onAddProduct,
}: ProductHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
          Productos
        </h1>

        <p className="text-lg text-[#c4c7c8] mt-2">
          Administra tus productos y variantes
        </p>
      </div>

      <button
        onClick={onAddProduct}
        className="bg-white text-black px-6 py-3 uppercase tracking-widest font-semibold text-sm flex items-center justify-center gap-2 w-full md:w-auto hover:bg-[#e2e2e2] transition-colors"
      >
        <span className="material-symbols-outlined">
          add
        </span>

        Agregar producto
      </button>
    </div>
  );
}

export default ProductHeader;