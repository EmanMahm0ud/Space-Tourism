import React from "react";
import logopic from "../images/logo.png"
import { NavLink } from "react-router-dom";

function Nav() {

    const expandNav = () => {
        const dashes = document.querySelectorAll(".dash");
        const ul = document.querySelector("nav ul");

        if (dashes[2].style.opacity === "0") {
            ul.style.right = "-100%";
            dashes[0].style.backgroundColor = "#fff";
            dashes[1].style.backgroundColor = "#fff";
            dashes[0].style.transform = "none";
            dashes[1].style.transform = "none";
            dashes[2].style.opacity = "1";
        } else {
            ul.style.right = "0";
            dashes[0].style.backgroundColor = "#d0d6f9";
            dashes[1].style.backgroundColor = "#d0d6f9";
            dashes[0].style.transform = "translateY(9px) rotate(45deg)";
            dashes[1].style.transform = "rotate(-45deg)";
            dashes[2].style.opacity = "0";
        }
    }


    return (
        <nav>
            <div className="logo"><img src={logopic} alt="logo" /></div>
            <div className="dash-container" onClick={expandNav}>
                <div className="dash"></div>
                <div className="dash"></div>
                <div className="dash"></div>
            </div>
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