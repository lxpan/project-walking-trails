import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <ul className="Footer-links">
                <h3>Explore</h3>
                <li>
                    <a href="">Countries</a>
                </li>
                <li>
                    <a href="">Regions</a>
                </li>
                <li>
                    <a href="">Cities</a>
                </li>
                <li>
                    <a href="">Trails</a>
                </li>
            </ul>
            <ul className="Footer-links">
                <h3>Site</h3>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Explore</a>
                </li>
                <li>
                    <a href="">Favourites</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
