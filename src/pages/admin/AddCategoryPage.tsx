import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopBar from "../../components/admin/AdminTopBar";

import CategoryFormHeader from "../../components/admin/categories/CategoryFormHeader";
import CategoryForm from "../../components/admin/categories/CategoryForm";
import CategoryLoading from "../../components/admin/categories/CategoryLoading";

import useCategoryForm from "../../hooks/admin/useCategoryForm";

const AddCategoryPage = () => {
    const {
        nombre,
        setNombre,

        error,

        loading,
        loadingCategory,

        isEditMode,

        handleSubmit,
        handleCancel
    } = useCategoryForm();

    // --------------------------------------------------
    // LOADING DE CATEGORÍA
    // --------------------------------------------------

    if (loadingCategory) {
        return <CategoryLoading />;
    }

    return (
        <div className="bg-background text-on-background min-h-screen font-body-md selection:bg-primary/30 antialiased overflow-x-hidden">

            <AdminSidebar />

            <div className="md:ml-64 min-h-screen flex flex-col">

                <AdminTopBar />

                <main className="flex-1 px-margin-mobile md:px-margin-desktop py-stack-lg pt-24 md:pt-stack-lg w-full">

                    <CategoryFormHeader
                        isEditMode={isEditMode}
                    />

                    <CategoryForm
                        nombre={nombre}
                        error={error}
                        loading={loading}
                        isEditMode={isEditMode}
                        onChangeNombre={setNombre}
                        onSubmit={handleSubmit}
                        onCancel={handleCancel}
                    />

                </main>

            </div>

        </div>
    );
};

export default AddCategoryPage;