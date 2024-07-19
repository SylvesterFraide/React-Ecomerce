import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="link">
                <Link to="/" >Shop</Link>
                <Link to="/Cart" >
                    <FaShoppingCart />
                </Link>
            </div>
        </div>
    )
};
export default Navbar;