import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar =()=> {
    const navLinks = (
        <ul>
            <li>
                <Link to= "/">
                    Get Weather                
                </Link>
            </li>
            <li>
                <Link to= "/about">
                   About 
                </Link>
            </li>
            <li>
                <Link to= "/examples">
                   Examples 
                </Link>
            </li>
        </ul>
    )

    return(
        <nav className="navbar">
            <li>Mayan's React Weather App</li>
            {navLinks}
        </nav>
    )
}

export default Navbar;