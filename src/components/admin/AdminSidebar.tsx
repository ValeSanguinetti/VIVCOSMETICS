import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function AdminSidebar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    const links = [
        {
            name: "Dashboard",
            path: "/admin",
            icon: "dashboard",
        },
        {
            name: "Productos",
            path: "/admin/productos",
            icon: "inventory_2",
        },
        {
            name: "Categorías",
            path: "/admin/categorias",
            icon: "category",
        },
        /*
        {
            name: "Órdenes",
            path: "/admin/orders",
            icon: "shopping_cart",
        },
        */
    ];

    return (
        <>
            {/* ================================================== */}
            {/* BOTÓN HAMBURGUESA - SOLO MOBILE */}
            {/* ================================================== */}

           <button
    type="button"
    onClick={() => setIsOpen(true)}
    className="
        fixed
        top-4
        left-4
        z-[60]
        flex
        items-center
        justify-center
        w-11
        h-11
        bg-[#131313]
        border
        border-white/15
        text-white
        shadow-lg
        md:hidden
    "
    aria-label="Abrir menú"
>
    <span className="material-symbols-outlined">
        menu
    </span>
</button>
            {/* ================================================== */}
            {/* OVERLAY - SOLO MOBILE */}
            {/* ================================================== */}

            {isOpen && (
                <div
                    className="
                        fixed
                        inset-0
                        bg-black/60
                        z-40
                        md:hidden
                    "
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* ================================================== */}
            {/* SIDEBAR */}
            {/* ================================================== */}

            <aside
                className={`
                    fixed
                    left-0
                    top-0
                    h-screen
                    w-64
                    bg-[#131313]
                    border-r
                    border-white/15
                    px-6
                    py-6
                    flex
                    flex-col
                    z-50

                    transform
                    transition-transform
                    duration-300
                    ease-in-out

                    md:translate-x-0

                    ${
                        isOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }
                `}
            >
                {/* ================================================== */}
                {/* HEADER DEL SIDEBAR */}
                {/* ================================================== */}

                <div className="flex items-center justify-between mb-16">
                    

                    {/* CERRAR - SOLO MOBILE */}

                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="
                            flex
                            items-center
                            justify-center
                            w-9
                            h-9
                            text-[#c4c7c8]
                            hover:text-white
                            md:hidden
                        "
                        aria-label="Cerrar menú"
                    >
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </button>
                </div>

                {/* ================================================== */}
                {/* ADMIN */}
                {/* ================================================== */}

                <div className="mb-6 flex items-center gap-4">
                    <div
                        className="
                            w-12
                            h-12
                            rounded-full
                            border
                            border-white/20
                            flex
                            items-center
                            justify-center
                        "
                    >
                        <span className="material-symbols-outlined">
                            person
                        </span>
                    </div>

                    <div>
                        <p className="font-semibold">
                            VIV Cosmetics
                        </p>

                        <p className="text-xs text-[#c4c7c8]">
                            Administrador
                        </p>
                    </div>
                </div>

                {/* ================================================== */}
                {/* NAV */}
                {/* ================================================== */}

                <nav className="flex-1 flex flex-col gap-2">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.path === "/admin"}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `
                                flex
                                items-center
                                gap-4
                                py-3
                                px-2
                                border-r-2
                                transition-colors

                                ${
                                    isActive
                                        ? "text-white border-white bg-white/5"
                                        : "text-[#c4c7c8] border-transparent hover:text-white hover:bg-white/5"
                                }
                                `
                            }
                        >
                            <span className="material-symbols-outlined">
                                {link.icon}
                            </span>

                            <span className="font-label-lg">
                                {link.name}
                            </span>
                        </NavLink>
                    ))}
                </nav>

                {/* ================================================== */}
                {/* LOGOUT */}
                {/* ================================================== */}

                <button
                    type="button"
                    onClick={handleLogout}
                    className="
                        flex
                        items-center
                        gap-4
                        py-3
                        px-2
                        text-[#c4c7c8]
                        hover:text-white
                        transition-colors
                    "
                >
                    <span className="material-symbols-outlined">
                        logout
                    </span>

                    <span className="font-label-lg">
                        Cerrar sesión
                    </span>
                </button>
            </aside>
        </>
    );
}

export default AdminSidebar;