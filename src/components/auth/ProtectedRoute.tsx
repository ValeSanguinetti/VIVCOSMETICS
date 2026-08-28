import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const token = localStorage.getItem("token");
    const userString = localStorage.getItem("user");

    // No está autenticado
    if (!token || !userString) {
        return <Navigate to="/login" replace />;
    }

    try {
        const user = JSON.parse(userString);

        // No es administrador
        if (Number(user.rol_id) !== 1) {
            return <Navigate to="/" replace />;
        }

        // Es administrador
        return <Outlet />;
    } catch (error) {
        console.error("Error al leer usuario:", error);

        // Si el user guardado está corrupto
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        return <Navigate to="/login" replace />;
    }
};

export default ProtectedRoute;