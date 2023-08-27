// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    connectFirestoreEmulator,
    getFirestore,
    collection,
    doc,
    getDocs,
    setDoc,
    deleteDoc,
} from 'firebase/firestore/lite';
import firebaseConfig from '../firebaseConfig';
import seedTrails from './seed';

// Use IIFE to hide outer private variables
export const api = (() => {
    let app;
    let db;

    const trailsCollection = 'trails';
    return {
        initialize() {
            app = initializeApp(firebaseConfig);
            db = getFirestore(app);
            connectFirestoreEmulator(db, '127.0.0.1', 8080);
        },
        // queries Firestore for trail data
        async nodeQuery() {
            const trailsObj = {};
            const _collection = collection(db, 'trails');
            const snapshot = await getDocs(_collection);

            snapshot.forEach((_doc) => {
                const { id } = _doc.data();
                const trail = {
                    [_doc.id]: _doc.data(),
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
