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
        { name: "About", link: "/" },
        { name: "CFP", link: "/cfp" },
        { name: "Committee", link: "/" },
        { name: "Keynotes", link: "/KeyNotes" },
        { name: "Guidelines", link: "/Guidelines" },
        { name: "Registration", link: "/login" },
        { name: "Program", link: "/" },
        { name: "Sponsorship", link: "/" },
        { name: "Travel", link: "/" },
        { name: "Documents", link: "/" },
        { name: "TPC", link: "/" },
        { name: "Contact", link: "/contact" },
    ];
    return (
        <>
            <div className="header-root">
                <div className="bars" onClick={toggle}>
                    {!hamburger ? <FaBars /> : <FaTimes />}
                </div>
                <nav className="header-main">
                    <div className="header-row">
                        <img
                            src={pecLogo}
                            alt="persPECtive"
                            className="header-logo"
                        />
                        <div className="header-heading">
                            <div className="header-row1">
                                International Conference on Futuristic Computing
                                & Communication
                            </div>
                            <div className="header-row2">
                                Punjab Engineering College (Deemed to be
                                University)
                            </div>
                            <div className="header-row3">September 2022</div>
                        </div>
                    </div>
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
