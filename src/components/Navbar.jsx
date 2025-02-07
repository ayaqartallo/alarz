import React, { useState } from "react";
import Logo from "../images/logo-b.png";
import { FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleAboutDropdown = () => setIsAboutOpen(!isAboutOpen);
    const toggleProductsDropdown = () => setIsProductsOpen(!isProductsOpen);
    const toggleNav = () => setIsNavOpen(!isNavOpen);

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="logo">
                    <img src={Logo} alt="Logo" className="logo-img" />
                </div>
                <div className={`menu ${isNavOpen ? "active" : ""}`}>
                    <ul className="nav-links">
                        <li>Home</li>
                        <li onMouseEnter={toggleAboutDropdown} onMouseLeave={toggleAboutDropdown}>
                            About Us
                            {isAboutOpen && (
                                <ul className="dropdown">
                                    <li>Our Story</li>
                                    <li>Health & Quality</li>
                                    <li>Distributors</li>
                                    <li>Certificates</li>
                                </ul>
                            )}
                        </li>
                        <li onMouseEnter={toggleProductsDropdown} onMouseLeave={toggleProductsDropdown}>
                            Products
                            {isProductsOpen && (
                                <ul className="dropdown">
                                    <li>Impulse (Single Serve)</li>
                                    <li>Take-home packs</li>
                                    <li>Food Service</li>
                                </ul>
                            )}
                        </li>
                        <li>Contact Us</li>
                    </ul>
                    <div className="navbar-right">
                        <a href="#">العربية |</a>
                        <div className="social-icons">
                            <a href="#">
                                <FaInstagram className="icon" />
                            </a>
                            <a href="#">
                                <FaFacebook className="icon" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="drop-menu" onClick={toggleNav}>
                    {isNavOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;