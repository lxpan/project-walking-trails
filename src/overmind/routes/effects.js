// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, doc, getDocs, setDoc, deleteDoc,
} from 'firebase/firestore/lite';
import firebaseConfig from '../firebaseConfig';

// Use IIFE to hide outer private variables
export const api = (() => {
    let app;
    let db;
    const routesCollection = 'routes';
    return {
        initialize() {
            app = initializeApp(firebaseConfig);
            db = getFirestore(app);
        },
        async getRoutes() {
            const routesObj = {};
            const _collection = collection(db, 'trails');
            const snapshot = await getDocs(_collection);
        },
        // queries Firestore for trail data
    };
})();
