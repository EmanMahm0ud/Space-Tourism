import React from "react";
import logopic from "../images/logo.png"
import { Link } from "react-router-dom";

function Nav() {
    return ( 
        <nav>
            <div className="logo"><img src={logopic} alt="logo"/></div>
            <ul>
                <Link to="/home"><li><b>00</b> HOME</li></Link>
                <Link to="/destination"><li><b>01</b> DESTINATION</li></Link>
                <Link to="/crew"><li><b>02</b> CREW</li></Link>
                <Link to="/technology"><li><b>03</b> TECHNOLOGY</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;