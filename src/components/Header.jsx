import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import { useAppState } from '../overmind';
import 'firebaseui/dist/firebaseui.css';
import '../styles/Header.css';

function Header() {
    const { isProduction } = useAppState();
    return (
        <div className="Header">
            <nav className="nav-list__left">
                <ul>
                    <Link to="/">
                        <li>
                            <span className="Header-title">WalkingTrails</span>
                        </li>
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
                    {!isProduction ? (
                        <li className="Header-dev-branch">Development Branch</li>
                    ) : (
                        <></>
                    )}
                    <li>Help</li>
                    <li>Profile</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
