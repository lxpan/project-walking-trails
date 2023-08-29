import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import firebase from 'firebase/compat/app';
// import * as firebaseui from 'firebaseui';
import { initializeApp } from 'firebase/app';
import {
    getAuth, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo,
} from 'firebase/auth';
import { useAppState, useActions } from '../overmind';
import firebaseConfig from '../overmind/firebaseConfig';
import 'firebaseui/dist/firebaseui.css';
import '../styles/Header.css';

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

function Header() {
    const { authedUser, isProduction } = useAppState();
    const actions = useActions();

    useEffect(() => {
        console.log(authedUser);
    }, [authedUser]);

    const executeLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const { user } = result;
                actions.users.setUser(user);
                // IdP data available using getAdditionalUserInfo(result)
                const additionalInfo = getAdditionalUserInfo(result);
                console.log(`${user.email} has logged in. Info: ${user.displayName}`);
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const { email } = error.customData;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(
                    `Error code: ${errorCode}: ${errorMessage}
            for account: ${email} and credential: ${credential}`,
                );
            });
    };

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
                    {authedUser ? <li>Welcome {authedUser.displayName}</li> : <></>}
                    {!isProduction ? (
                        <li className="Header-dev-branch">Development Branch</li>
                    ) : (
                        <></>
                    )}
                    {!authedUser ? (
                        <button onClick={executeLogin}>Login</button>
                    ) : (
                        <Link to="/account">
                            <button>Profile</button>
                        </Link>
                    )}
                    {/* <li>Help</li>
                    <li>Profile</li> */}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
