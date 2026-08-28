import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopBar from "../../components/admin/AdminTopBar";
import MetricCard from "../../components/admin/MetricCard";
import RecentOrders from "../../components/admin/RecentOrders";
import SalesChart from "../../components/admin/SalesChart";
import TopProducts from "../../components/admin/TopProducts";

function AdminDashboardPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-body-md">

            <AdminSidebar />

           <div className="flex-1 ml-0 md:ml-64 min-h-screen">
                <AdminTopBar />

                <main className="p-6 md:p-10">

                    {/* HEADER */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">

                        <div>
                            <h1 className="font-headline-lg text-4xl font-bold tracking-tight">
                                Overview
                            </h1>

                            <p className="mt-2 text-[#c4c7c8]">
                                Performance metrics for current period.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="px-6 py-3 bg-white text-black font-label-lg uppercase tracking-widest hover:bg-[#e2e2e2] transition-colors"
                        >
                            Download Report
                        </button>

                    </div>

                    {/* MÉTRICAS */}
                    <section
                        aria-label="Business metrics"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                    >

                        <MetricCard
                            title="Total Sales"
                            value="$24,500"
                        />

                        <MetricCard
                            title="Active Orders"
                            value="12"
                        />

                        <MetricCard
                            title="Total Customers"
                            value="850"
                        />

                        <MetricCard
                            title="Avg Order Value"
                            value="$65"
                        />

                    </section>

                    {/* CHART + TOP PRODUCTS */}
                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        <div className="lg:col-span-2">
                            <SalesChart />
                        </div>

                        <TopProducts />

                    </section>

                    {/* ORDERS */}
                    <RecentOrders />

                </main>

            </div>

        </div>
    );
}

export default AdminDashboardPage;