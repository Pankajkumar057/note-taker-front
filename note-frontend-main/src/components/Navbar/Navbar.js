import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <ul className="link">
                    <Link to="/add">
                        <li>AddNote</li>
                    </Link>
                    <Link to="/deleteall">
                        <li>DeleteAll</li>
                    </Link>
                    <Link to="/home">
                        <li>Home</li>
                    </Link>
                    <Link to="/exports">
                        <li>Exports</li>
                    </Link>

                </ul>
            </nav>
        </div>
    );
};
export default Navbar;


