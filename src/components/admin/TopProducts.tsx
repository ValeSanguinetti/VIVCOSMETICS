const products = [
    {
        name: "Luminance Serum",
        category: "Skincare",
        sold: 142,
    },
    {
        name: "Crimson Velvet",
        category: "Cosmetics",
        sold: 98,
    },
    {
        name: "Night Repair",
        category: "Skincare",
        sold: 75,
    },
];

function TopProducts() {

    return (
        <section className="border border-white/15 bg-[#0a0a0a] p-6">

            <h2 className="text-2xl font-semibold mb-6">
                Top Selling
            </h2>

            <div className="flex flex-col">

                {products.map((product, index) => (

                    <div
                        key={product.name}
                        className={`
                            flex items-center gap-4 py-4
                            ${
                                index !== products.length - 1
                                    ? "border-b border-white/10"
                                    : ""
                            }
                        `}
                    >

                        <div className="w-16 h-16 border border-white/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[#c4c7c8]">
                                image
                            </span>
                        </div>

                        <div className="flex-1">

                            <p className="font-semibold uppercase tracking-wider">
                                {product.name}
                            </p>

                            <p className="text-sm text-[#c4c7c8]">
                                {product.category}
                            </p>

                        </div>

                        <div className="text-right">

                            <p className="font-bold">
                                {product.sold}
                            </p>

                            <p className="text-xs text-[#c4c7c8]">
                                Sold
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default TopProducts;