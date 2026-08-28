import type { Product } from "../../../types/product.type";
import ProductRow from "./ProductRow";

interface ProductTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

function ProductTable({
  products,
  onEdit,
  onDelete,
}: ProductTableProps) {
  return (
    <div className="w-full overflow-x-auto border border-white/15 bg-[#050505]">
      <table className="w-full text-left border-collapse">

        <thead>
          <tr className="border-b border-white/15 bg-[#1b1b1b]/50">

            <th className="p-4 text-xs uppercase tracking-widest text-[#c4c7c8]">
              Producto
            </th>

            <th className="p-4 text-xs uppercase tracking-widest text-[#c4c7c8]">
              Categoría
            </th>

            <th className="p-4 text-xs uppercase tracking-widest text-[#c4c7c8]">
              Precio
            </th>

            <th className="p-4 text-xs uppercase tracking-widest text-[#c4c7c8]">
              Stock
            </th>

            <th className="p-4 text-xs uppercase tracking-widest text-[#c4c7c8] text-right">
              Acciones
            </th>

          </tr>
        </thead>

        <tbody className="divide-y divide-white/10">

          {products.length > 0 ? (
            products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className="p-10 text-center text-[#c4c7c8]"
              >
                No se encontraron productos.
              </td>
            </tr>
          )}

        </tbody>

      </table>
    </div>
  );
}

export default ProductTable;