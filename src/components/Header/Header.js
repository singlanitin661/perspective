import React, { useState } from "react";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import pecLogo from "../../assets/pers-logo-new.png";
import { Link } from "react-router-dom";

const Header = () => {
    const [hamburger, setHamburger] = useState(false);
    const toggle = () => {
        setHamburger(!hamburger);
    };
    const arr = [
        { name: "Home", link: "/" },
        { name: "Gallery", link: "/" },
        { name: "FAQs", link: "/" },
        { name: "Login", link: "/login" },
        { name: "CallForPaper", link: "/cfp"},
    ];
    return (
        <>
            <div className="header-root">
                <div className="bars" onClick={toggle}>
                    {!hamburger ? <FaBars /> : <FaTimes />}
                </div>
                <nav className="header-main">
                    <img
                        src={pecLogo}
                        alt="persPECtive"
                        className="header-logo"
                    />
                    <ul className={`header-list` + (hamburger ? +"-ham" : "")}>
                        {arr.map((item) => {
                            return (
                                <li
                                    className={
                                        `header-list-item` +
                                        (hamburger ? +"-ham" : "")
                                    }
                                >
                                    <Link to={item.link}>{item.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;
