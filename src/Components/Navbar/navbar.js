import React from 'react';
import './navbar.css'; // Import your CSS file for styling

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="navbar-center">
                <h1>Landing</h1>
            </div>
            <div className="navbar-right">
                <a href="#" className="cta-button">Buy Now</a>
            </div>
        </nav>
    );
}

export default Navbar;
