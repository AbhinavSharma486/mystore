import "./Header.scss";
import { useEffect, useState } from "react";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";


const Header = () => {

    const [scrolled, setScroller] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
            setScroller(true);
        }
        else {
            setScroller(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`} >
                <div className="header-content">
                    <ul className="left">
                        <li>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center">
                        🇲 🇾 🇸 🇹 🇴 🇷 🇪
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setShowSearch(true)} />
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={() => setShowCart(true)}>
                            <CgShoppingCart />
                        </span>
                    </div>
                </div>
            </header>
            {
                showCart && <Cart setShowCart={setShowCart} />
            }
            {
                showSearch && <Search setShowSearch={setShowSearch} />
            }

        </>
    );
};

export default Header;
