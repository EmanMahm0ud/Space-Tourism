import React from "react";
import logopic from "../images/logo.png"
import { NavLink } from "react-router-dom";

function Nav() {
    return ( 
        <nav>
            <div className="logo"><img src={logopic} alt="logo"/></div>
            <ul>
                <NavLink to="/home" className={({ isActive }) => (isActive ? "active-nav" : "")}><li><b>00</b> HOME</li></NavLink>
                <NavLink to="/destination" className={({ isActive }) => (isActive ? "active-nav" : "")}><li><b>01</b> DESTINATION</li></NavLink>
                <NavLink to="/crew" className={({ isActive }) => (isActive ? "active-nav" : "")}><li><b>02</b> CREW</li></NavLink>
                <NavLink to="/technology" className={({ isActive }) => (isActive ? "active-nav" : "")}><li><b>03</b> TECHNOLOGY</li></NavLink>
            </ul>
        </nav>
    );
}

export default Nav;