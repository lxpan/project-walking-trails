import React from 'react';
import { auth } from 'firebaseui';
import { useAppState, useActions } from '../overmind';
import '../styles/Account.css';

function Account() {
    const { authedUser } = useAppState();

    if (!authedUser) {
        return <h3>Please log in to access the account page.</h3>;
    }

    return (
        <div className="Account-container">
            <h3>User Account</h3>
            <ol className="Account-user-info-list">
                <li>displayName: {authedUser.displayName}</li>
                <li>email: {authedUser.email}</li>
                <li>phoneNumber: {authedUser.phoneNumber ? authedUser.phoneNumber : 'null'}</li>
                <li>photoURL: {authedUser.photoURL}</li>
                <li>providerId: ${authedUser.providerId}</li>
                <li>User id (uid): ${authedUser.uid}</li>
            </ol>
        </div>
    );
}

export default Account;
