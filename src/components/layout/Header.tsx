
import { useState } from "react";

import HeaderNav from "./HeaderNav";
import MobileMenu from "./MobileMenu";
import CartSidebar from "./CartSidebar";
import UserSidebar from "./UserSidebar";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isUserOpen, setIsUserOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    const closeUser = () => {
        setIsUserOpen(false);
    };

    return (
        <>
            <HeaderNav
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                setIsCartOpen={setIsCartOpen}
                setIsUserOpen={setIsUserOpen}
                closeMenu={closeMenu}
            />

            <MobileMenu
                isMenuOpen={isMenuOpen}
                closeMenu={closeMenu}
            />

            <CartSidebar
                isCartOpen={isCartOpen}
                closeCart={closeCart}
            />

            <UserSidebar
                isUserOpen={isUserOpen}
                closeUser={closeUser}
            />
        </>
    );
}

export default Header;
