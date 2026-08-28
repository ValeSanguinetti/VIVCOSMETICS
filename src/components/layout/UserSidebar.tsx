
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

interface UserSidebarProps {
    isUserOpen: boolean;
    closeUser: () => void;
}

interface StoredUser {
    id?: number;
    email?: string;
}

function UserSidebar({
    isUserOpen,
    closeUser,
}: UserSidebarProps) {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
const { resetCart } = useCart();
    let user: StoredUser | null = null;

    if (storedUser) {
        try {
            user = JSON.parse(storedUser);
        } catch {
            user = null;
        }
    }

    const isLoggedIn = !!token;

    const handleLogin = () => {
        closeUser();
        navigate("/login");
    };

    const handleLogout = () => {
    resetCart();

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    closeUser();
    navigate("/login");
};

    return (
        <>
            {/* OVERLAY */}

            {isUserOpen && (
                <div
                    className="
                        fixed
                        inset-0
                        z-[100]
                        bg-black/50
                        backdrop-blur-sm
                    "
                    onClick={closeUser}
                />
            )}

            {/* SIDEBAR */}

            <aside
                className={`
                    fixed
                    top-0
                    right-0
                    h-full
                    w-full
                    sm:w-[420px]
                    z-[110]
                    bg-[#131313]
                    border-l
                    border-white/10
                    shadow-2xl
                    flex
                    flex-col
                    transition-transform
                    duration-500
                    ease-out
                    ${
                        isUserOpen
                            ? "translate-x-0"
                            : "translate-x-full"
                    }
                `}
            >

                {/* HEADER */}

                <div
                    className="
                        h-20
                        px-6
                        border-b
                        border-white/10
                        flex
                        items-center
                        justify-between
                        shrink-0
                    "
                >
                    <div>
                        <h2
                            className="
                                text-white
                                text-lg
                                uppercase
                                tracking-widest
                            "
                        >
                            Mi cuenta
                        </h2>

                        <p
                            className="
                                text-xs
                                text-[#8e9192]
                                mt-1
                            "
                        >
                            {isLoggedIn
                                ? "Sesión iniciada"
                                : "Acceso a tu cuenta"}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={closeUser}
                        aria-label="Cerrar cuenta"
                        className="
                            text-[#8e9192]
                            hover:text-white
                            transition-colors
                        "
                    >
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </button>
                </div>

                {/* CONTENT */}

                <div
                    className="
                        flex-1
                        px-6
                        py-8
                    "
                >

                    {isLoggedIn ? (
                        <div className="space-y-8">

                            {/* USER INFO */}

                            <div>
                                <p
                                    className="
                                        text-xs
                                        uppercase
                                        tracking-widest
                                        text-[#8e9192]
                                        mb-3
                                    "
                                >
                                    Correo electrónico
                                </p>

                                <p
                                    className="
                                        text-white
                                        text-base
                                        break-all
                                    "
                                >
                                    {user?.email ??
                                        "Usuario"}
                                </p>
                            </div>

                            {/* LOGOUT */}

                            <button
                                type="button"
                                onClick={handleLogout}
                                className="
                                    w-full
                                    border
                                    border-white/10
                                    text-white
                                    py-4
                                    uppercase
                                    tracking-widest
                                    text-sm
                                    hover:bg-white
                                    hover:text-black
                                    transition-colors
                                "
                            >
                                Cerrar sesión
                            </button>

                        </div>
                    ) : (
                        <div
                            className="
                                h-full
                                flex
                                flex-col
                                items-center
                                justify-center
                                text-center
                                px-6
                            "
                        >
                            <span
                                className="
                                    material-symbols-outlined
                                    text-5xl
                                    text-[#555]
                                    mb-5
                                "
                            >
                                person
                            </span>

                            <h3
                                className="
                                    text-white
                                    uppercase
                                    tracking-widest
                                    text-sm
                                "
                            >
                                No has iniciado sesión
                            </h3>

                            <p
                                className="
                                    text-[#8e9192]
                                    text-sm
                                    mt-3
                                    mb-8
                                "
                            >
                                Inicia sesión para acceder a tu
                                cuenta.
                            </p>

                            <button
                                type="button"
                                onClick={handleLogin}
                                className="
                                    w-full
                                    bg-white
                                    text-black
                                    py-4
                                    uppercase
                                    tracking-widest
                                    text-sm
                                    hover:bg-[#e5e2e1]
                                    transition-colors
                                "
                            >
                                Iniciar sesión
                            </button>
                        </div>
                    )}

                </div>
            </aside>
        </>
    );
}

export default UserSidebar;
