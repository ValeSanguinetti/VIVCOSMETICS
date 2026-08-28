const orders = [
    {
        id: "#VIV-8902",
        customer: "Eleanor Vance",
        product: "Luminance Serum, Crimson Velvet",
        status: "Processing",
        total: "$185.00",
    },
    {
        id: "#VIV-8901",
        customer: "Julian Blackwood",
        product: "Night Repair Cream",
        status: "Shipped",
        total: "$120.00",
    },
    {
        id: "#VIV-8900",
        customer: "Sophia Sterling",
        product: "Botanical Cleanser",
        status: "Delivered",
        total: "$45.00",
    },
];

function RecentOrders() {

    return (
        <section className="mt-6 border border-white/15 bg-[#0a0a0a] p-6">

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-semibold">
                    Recent Orders
                </h2>

                <button
                    type="button"
                    className="text-xs uppercase tracking-widest text-[#c4c7c8] hover:text-white"
                >
                    View All
                </button>

            </div>

            <div className="overflow-x-auto">

                <table className="w-full text-left">

                    <thead>

                        <tr className="border-b border-white/20">

                            <th className="pb-4 pr-6 text-xs uppercase tracking-widest text-[#c4c7c8]">
                                Order ID
                            </th>

                            <th className="pb-4 pr-6 text-xs uppercase tracking-widest text-[#c4c7c8]">
                                Customer
                            </th>

                            <th className="pb-4 pr-6 text-xs uppercase tracking-widest text-[#c4c7c8]">
                                Product
                            </th>

                            <th className="pb-4 pr-6 text-xs uppercase tracking-widest text-[#c4c7c8]">
                                Status
                            </th>

                            <th className="pb-4 text-right text-xs uppercase tracking-widest text-[#c4c7c8]">
                                Total
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {orders.map((order) => (

                            <tr
                                key={order.id}
                                className="border-b border-white/10 hover:bg-white/5 transition-colors"
                            >

                                <td className="py-4 pr-6 font-mono">
                                    {order.id}
                                </td>

                                <td className="py-4 pr-6">
                                    {order.customer}
                                </td>

                                <td className="py-4 pr-6 text-[#c4c7c8]">
                                    {order.product}
                                </td>

                                <td className="py-4 pr-6">

                                    <span className="inline-block px-2 py-1 border border-white/30 text-xs uppercase">
                                        {order.status}
                                    </span>

                                </td>

                                <td className="py-4 text-right font-bold">
                                    {order.total}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </section>
    );
}

export default RecentOrders;