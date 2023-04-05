// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: 'AIzaSyBOirK1XQJqP_p_DhEB5kjldjtmu7K9v1c',
    authDomain: 'walking-trails-e8037.firebaseapp.com',
    projectId: 'walking-trails-e8037',
    storageBucket: 'walking-trails-e8037.appspot.com',
    messagingSenderId: '225102397227',
    appId: '1:225102397227:web:4ed6326f39f572348e4f6e',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const trailsApi = {
    getTrailsFromServer() {},
};

export default trailsApi;
