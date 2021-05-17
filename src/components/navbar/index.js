import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark">
                <span id="navbarName" className="navbar-brand">Giovany Chavez</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;