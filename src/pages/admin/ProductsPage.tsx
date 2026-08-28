import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopBar from "../../components/admin/AdminTopBar";

import ProductHeader from "../../components/admin/products/ProductHeader";
import ProductFilters from "../../components/admin/products/ProductFilters";
import ProductTable from "../../components/admin/products/ProductTable";
import ProductPagination from "../../components/admin/products/ProductPagination";

import useProducts from "../../hooks/admin/useProducts";

function ProductsPage() {
    const {
        products,
        categories,

        search,
        selectedCategory,

        currentPage,
        totalPages,
        totalProducts,

        loading,
        error,

        showingFrom,
        showingTo,

        handleSearchChange,
        handleCategoryChange,

        handleAddProduct,
        handleEditProduct,
        handleDeleteProduct,

        setCurrentPage
    } = useProducts();

    return (
        <div className="min-h-screen bg-[#131313] text-[#e2e2e2] font-body-md">

            <AdminSidebar />

            <main className="flex-1 md:ml-64 min-h-screen bg-[#131313] pb-16">

                <AdminTopBar />

                <div className="px-5 md:px-20 pt-6 max-w-[1280px] mx-auto">

                    {/* HEADER */}

                    <ProductHeader
                        onAddProduct={
                            handleAddProduct
                        }
                    />

                    {/* FILTERS */}

                    <ProductFilters
                        search={search}
                        category={selectedCategory}
                        categories={categories}
                        onSearchChange={
                            handleSearchChange
                        }
                        onCategoryChange={
                            handleCategoryChange
                        }
                    />

                    {/* ERROR */}

                    {error && (
                        <div className="border border-red-400/20 bg-red-400/5 px-4 py-3 mb-5">
                            <p className="text-sm text-red-400">
                                {error}
                            </p>
                        </div>
                    )}

                    {/* LOADING */}

                    {loading ? (
                        <div className="border border-white/10 bg-[#050505] p-10 text-center">
                            <p className="text-sm text-[#c4c7c8]">
                                Loading products...
                            </p>
                        </div>
                    ) : (
                        <ProductTable
                            products={products}
                            onEdit={
                                handleEditProduct
                            }
                            onDelete={
                                handleDeleteProduct
                            }
                        />
                    )}

                    {/* PAGINATION */}

                    {!loading && (
                        <ProductPagination
                            currentPage={
                                currentPage
                            }
                            totalPages={
                                totalPages
                            }
                            totalProducts={
                                totalProducts
                            }
                            showingFrom={
                                showingFrom
                            }
                            showingTo={
                                showingTo
                            }
                            onPageChange={
                                setCurrentPage
                            }
                        />
                    )}

                </div>
            </main>
        </div>
    );
}

export default ProductsPage;