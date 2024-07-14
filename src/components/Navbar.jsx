import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

 const Navbar = () =>{
    return (
        <div className="nav-bar">
            <div className="link">
               <Link to="/" >Shop</Link>
               <Link to="/Cart" >cart</Link>
            </div>
        </div>
    )
 };
 export default Navbar;