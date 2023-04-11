// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, doc, getDocs, setDoc, deleteDoc,
} from 'firebase/firestore/lite';
import seedTrails from './seed';

// Firebase configuration details
const firebaseConfig = {
    apiKey: 'AIzaSyBOirK1XQJqP_p_DhEB5kjldjtmu7K9v1c',
    authDomain: 'walking-trails-e8037.firebaseapp.com',
    projectId: 'walking-trails-e8037',
    storageBucket: 'walking-trails-e8037.appspot.com',
    messagingSenderId: '225102397227',
    appId: '1:225102397227:web:4ed6326f39f572348e4f6e',
};

// Use IIFE to hide outer private variables
export const api = (() => {
    let app;
    let db;
    const trailsCollection = 'trails';
    return {
        initialize() {
            app = initializeApp(firebaseConfig);
            db = getFirestore(app);
        },
        // queries Firestore for trail data
        async nodeQuery() {
            const trailsObj = {};
            const _collection = collection(db, 'trails');
            const snapshot = await getDocs(_collection);

            snapshot.forEach((_doc) => {
                const { name, id } = _doc.data();
                const trail = {
                    [_doc.id]: { name, id },
                };
                Object.assign(trailsObj, trail);
            });

            return trailsObj;
        },
        async mockQuery() {
            return seedTrails;
        },
        // writes a single document to the collection
        async writeDocument(documentName, documentJSON) {
            // Add new project entry to the Firebase database.
            try {
                let json;
                if (typeof documentJSON === 'string') {
                    json = JSON.parse(documentJSON);
                }
                else {
                    json = documentJSON;
                }

                await setDoc(doc(db, trailsCollection, documentName), {
                    ...json,
                });
            }
            catch (error) {
                console.error('Error writing new project to Firebase Database', error);
            }
        },
        // delete all documents from 'trails' individually
        async wipeTrails() {
            const _collection = collection(db, 'trails');
            const snapshot = await getDocs(_collection);

            snapshot.docs.forEach((_doc) => {
                deleteDoc(doc(_collection, _doc.id));
            });
        },
        // uploads our seed trail objects from seed.js
        migrateTrails() {
            seedTrails.forEach((trail) => {
                this.writeDocument(trail.id, trail);
            });
        },
    };
})();
