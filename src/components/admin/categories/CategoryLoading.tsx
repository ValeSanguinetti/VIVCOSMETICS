import AdminSidebar from "../AdminSidebar";
import AdminTopBar from "../AdminTopBar";

function CategoryLoading() {
    return (
        <div className="min-h-screen bg-background text-on-background">

            <AdminSidebar />

            <div className="md:ml-64 min-h-screen flex flex-col">

                <AdminTopBar />

                <main className="flex-1 flex items-center justify-center">

                    <p className="text-on-surface-variant">
                        Loading category...
                    </p>

                </main>

            </div>

        </div>
    );
}

export default CategoryLoading;