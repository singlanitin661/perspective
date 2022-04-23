import React, { useState } from "react";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import pecLogo from "../../assets/PERS.png";

const Header = () => {
    const [hamburger, setHamburger] = useState(false);
    const toggle = () => {
        setHamburger(!hamburger);
    };
    const arr = ["Home", "Research", "Gallery", "FAQ", "Awards"];
    return (
        <>
            <div className="header-root">
                <div className="bars" onClick={toggle}>
                    {!hamburger ? <FaBars /> : <FaTimes />}
                </div>
                <nav className="header-main">
                  <img src={pecLogo} alt="persPECtive" className="header-logo"/>
                    <ul className={`header-list` + (hamburger ? +"-ham" : "")}>
                        {arr.map((item) => {
                            return (
                                <li
                                    className={
                                        `header-list-item` +
                                        (hamburger ? +"-ham" : "")
                                    }
                                >
                                    {item}
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
