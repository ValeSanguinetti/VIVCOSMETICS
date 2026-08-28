import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import ProductsPage from "./pages/admin/ProductsPage";
import NewProductAdminPage from "./pages/admin/NewProductAdminPage";
import CategoriesPage from "./pages/admin/CategoriesPage";
import AddCategoryPage from "./pages/admin/AddCategoryPage";

import CatalogPage from "./pages/CatalogPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import MakeupCoursePage from "./pages/MakeupCoursePage";

import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* HOME */}
                <Route
                    path="/"
                    element={<HomePage />}
                />

                {/* CATÁLOGO */}
                <Route
                    path="/productos"
                    element={<CatalogPage />}
                />

                {/* PRODUCTO */}
                <Route
                    path="/productos/:slug"
                    element={<ProductPage />}
                />

                {/* AUTENTICACIÓN */}
                <Route
                    path="/login"
                    element={<LoginPage />}
                />

                <Route
                    path="/registro"
                    element={<RegisterPage />}
                />

                <Route
                    path="/reset-password"
                    element={<ResetPasswordPage />}
                />

                <Route
                    path="/forgot-password"
                    element={<ForgotPasswordPage />}
                />

                {/* CURSO DE MAQUILLAJE */}
                <Route
                    path="/curso-automaquillaje"
                    element={<MakeupCoursePage />}
                />

                {/* ========================================= */}
                {/* PANEL DE ADMINISTRACIÓN */}
                {/* ========================================= */}

                <Route element={<ProtectedRoute />}>

                    <Route
                        path="/admin"
                        element={<AdminDashboardPage />}
                    />

                    <Route
                        path="/admin/productos"
                        element={<ProductsPage />}
                    />

                    <Route
                        path="/admin/productos/nuevo"
                        element={<NewProductAdminPage />}
                    />

                    <Route
                        path="/admin/productos/editar/:id"
                        element={<NewProductAdminPage />}
                    />

                    <Route
                        path="/admin/categorias"
                        element={<CategoriesPage />}
                    />

                    <Route
                        path="/admin/categorias/nuevo"
                        element={<AddCategoryPage />}
                    />

                    <Route
                        path="/admin/categorias/editar/:id"
                        element={<AddCategoryPage />}
                    />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;