import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopBar from "../../components/admin/AdminTopBar";

import CategoryHeader from "../../components/admin/categories/CategoryHeader";
import CategorySearch from "../../components/admin/categories/CategorySearch";
import CategoryTable from "../../components/admin/categories/CategoryTable";
import CategoryPagination from "../../components/admin/categories/CategoryPagination";

import useCategories from "../../hooks/admin/useCategories";

function CategoriesPage() {
    const {
        categories,
        search,
        setSearch,
        error,
        loading,

        currentPage,
        totalPages,
        totalCategories,

        handleEdit,
        handleDelete,
        handleAddCategory,
        handlePreviousPage,
        handleNextPage
    } = useCategories();

    return (
        <div className="min-h-screen bg-[#131313] text-[#e2e2e2] font-body-md">

            <AdminSidebar />

            <main className="md:ml-64 min-h-screen flex flex-col">

                <AdminTopBar />

                <div className="flex-1 px-5 md:px-20 py-8 md:py-16 w-full max-w-[1280px] mx-auto">

                    <CategoryHeader
                        onAdd={handleAddCategory}
                    />

                    <CategorySearch
                        value={search}
                        onChange={setSearch}
                    />

                    {/* ERROR */}
                    {error && (
                        <div className="border border-red-400/20 bg-red-400/5 px-4 py-3 mb-6">
                            <p className="text-sm text-red-300">
                                {error}
                            </p>
                        </div>
                    )}

                    <CategoryTable
                        categories={categories}
                        loading={loading}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />

                    <CategoryPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        totalCategories={totalCategories}
                        currentCount={categories.length}
                        loading={loading}
                        onPrevious={handlePreviousPage}
                        onNext={handleNextPage}
                    />

                </div>
            </main>
        </div>
    );
}

export default CategoriesPage;