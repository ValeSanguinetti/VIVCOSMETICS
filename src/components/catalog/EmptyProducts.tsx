export default function EmptyProducts() {
    return (
        <div className="py-24 text-center">
            <span
                className="
                    material-symbols-outlined
                    text-4xl
                    text-[#555]
                    mb-4
                "
            >
                inventory_2
            </span>

            <p
                className="
                    font-body-md
                    text-[#c4c7c8]
                "
            >
                No products found in this category.
            </p>
        </div>
    );
}