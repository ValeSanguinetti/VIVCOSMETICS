import type { ProductStatus } from "../../../types/product";

interface ProductStatusBadgeProps {
  status: ProductStatus;
}

const styles: Record<ProductStatus, string> = {
  "In Stock":
    "border-white/30 text-white bg-white/5",

  "Low Stock":
    "border-[#c8c6c5]/30 text-[#c8c6c5] bg-white/5",

  "Out of Stock":
    "border-[#444748] text-[#8e9192] bg-[#353535]",
};

function ProductStatusBadge({
  status,
}: ProductStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-1 border text-xs uppercase ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default ProductStatusBadge;