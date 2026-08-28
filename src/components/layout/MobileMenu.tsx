import { Link } from "react-router-dom";

interface MobileMenuProps {
    isMenuOpen: boolean;
    closeMenu: () => void;
}

function MobileMenu({
    isMenuOpen,
    closeMenu,
}: MobileMenuProps) {
    return (
        <div
            className={`
                fixed
                top-20
                left-0
                w-full
                z-[60]
                md:hidden
                bg-background
                border-b
                border-white/10
                backdrop-blur-xl
                transition-all
                duration-300

                ${
                    isMenuOpen
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-4 invisible"
                }
            `}
        >
            <nav
                className="
                    px-margin-mobile
                    py-8
                "
            >
                <ul className="flex flex-col">

                    <li>
                        <Link
                            to="/productos"
                            onClick={closeMenu}
                            className="
                                block
                                py-4
                                text-primary
                                font-label-lg
                                text-label-lg
                                uppercase
                                tracking-widest
                                border-b
                                border-white/10
                            "
                        >
                            Productos
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/curso-automaquillaje"
                            onClick={closeMenu}
                            className="
                                block
                                py-4
                                text-primary
                                font-label-lg
                                text-label-lg
                                uppercase
                                tracking-widest
                                border-b
                                border-white/10
                            "
                        >
                            Cursos
                        </Link>
                    </li>


                </ul>
            </nav>
        </div>
    );
}

export default MobileMenu;