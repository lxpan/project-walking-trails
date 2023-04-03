import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
        <div className="Header">
            <span className="Header-title">WalkingTrails</span>
            <nav>
                <ul className="nav-list__left">
                    <Link to="/">
                        <li>WalkingTrails</li>
                    </Link>
                    <Link to="/explore">
                        <li>Explore</li>
                    </Link>
                    <Link to="/saved">
                        <li>Saved</li>
                    </Link>
                </ul>
            </nav>
            <nav className="nav-list__right">
                <ul>
                    <li>Help</li>
                    <li>Profile</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
