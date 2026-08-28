
import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";

const API_URL = import.meta.env.VITE_API_URL;

interface HeaderNavProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
    setIsCartOpen: (value: boolean) => void;
    setIsUserOpen: (value: boolean) => void;
    closeMenu: () => void;
}

function HeaderNav({
    isMenuOpen,
    setIsMenuOpen,
    setIsCartOpen,
    setIsUserOpen,
    closeMenu,
}: HeaderNavProps) {

    const { cartCount } = useCart();

    return (
        <nav
            className="
                fixed
                top-0
                left-0
                w-full
                z-50
                bg-background/80
                backdrop-blur-xl
                border-b
                border-white/10
            "
        >
            <div
                className="
                    flex
                    justify-between
                    items-center
                    max-w-[1280px]
                    mx-auto
                    px-margin-mobile
                    md:px-margin-desktop
                    h-20
                "
            >

                {/* BRAND */}

                <Link
                    to="/"
                    onClick={closeMenu}
                    className="flex items-center"
                >
                    <img
                        src={`${API_URL}/assets/logo.png`}
                        alt="VIV Cosmetics"
                        className="
                            h-20
                            md:h-24
                            w-auto
                            object-contain
                        "
                    />
                </Link>

                {/* DESKTOP LINKS */}

                <ul
                    className="
                        hidden
                        md:flex
                        space-x-gutter
                        items-center
                    "
                >
                    <li>
                        <Link
                            to="/productos"
                            className="
                                text-on-surface-variant/60
                                hover:text-primary
                                transition-colors
                                font-label-lg
                                text-label-lg
                                uppercase
                                tracking-widest
                            "
                        >
                            Productos
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/curso-automaquillaje"
                            className="
                                text-on-surface-variant/60
                                hover:text-primary
                                transition-colors
                                font-label-lg
                                text-label-lg
                                uppercase
                                tracking-widest
                            "
                        >
                            Cursos
                        </Link>
                    </li>

                </ul>

                {/* ICONS */}

                <div className="flex items-center space-x-4">

                    {/* SHOPPING BAG */}

                    <button
                        type="button"
                        aria-label="Abrir carrito"
                        onClick={() => setIsCartOpen(true)}
                        className="
                            relative
                            text-primary
                            hover:opacity-70
                            transition-opacity
                            active:scale-95
                            duration-200
                        "
                    >
                        <span className="material-symbols-outlined">
                            shopping_bag
                        </span>

                        {cartCount > 0 && (
                            <span
                                className="
                                    absolute
                                    -top-2
                                    -right-2
                                    min-w-5
                                    h-5
                                    px-1
                                    rounded-full
                                    bg-primary
                                    text-background
                                    text-[10px]
                                    font-semibold
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                {cartCount}
                            </span>
                        )}
                    </button>

                    {/* USER */}

                    <button
                        type="button"
                        aria-label="Abrir usuario"
                        onClick={() => setIsUserOpen(true)}
                        className="
                            text-primary
                            hover:opacity-70
                            transition-opacity
                            active:scale-95
                            duration-200
                        "
                    >
                        <span className="material-symbols-outlined">
                            person
                        </span>
                    </button>

                    {/* MOBILE MENU */}

                    <button
                        type="button"
                        aria-label={
                            isMenuOpen
                                ? "Cerrar menú"
                                : "Abrir menú"
                        }
                        aria-expanded={isMenuOpen}
                        onClick={() =>
                            setIsMenuOpen(!isMenuOpen)
                        }
                        className="
                            text-primary
                            hover:opacity-70
                            transition-opacity
                            active:scale-95
                            duration-200
                            md:hidden
                        "
                    >
                        <span className="material-symbols-outlined">
                            {isMenuOpen ? "close" : "menu"}
                        </span>
                    </button>

                </div>
            </div>
        </nav>
    );
}

export default HeaderNav;
