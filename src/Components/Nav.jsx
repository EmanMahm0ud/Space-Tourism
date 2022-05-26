import React from "react";
import logopic from "../images/logo.png"

function Nav() {
    return ( 
        <nav>
            <div className="logo"><img src={logopic} alt="logo"/></div>
            <ul>
                <li><b>00</b> HOME</li>
                <li><b>01</b> DESTINATION</li>
                <li><b>02</b> CREW</li>
                <li><b>03</b> TECHNOLOGY</li>
            </ul>
        </nav>
    );
}

export default Nav;