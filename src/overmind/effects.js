// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, doc, getDocs, setDoc, deleteDoc,
} from 'firebase/firestore/lite';
import seedTrails from './seed';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBOirK1XQJqP_p_DhEB5kjldjtmu7K9v1c',
    authDomain: 'walking-trails-e8037.firebaseapp.com',
    projectId: 'walking-trails-e8037',
    storageBucket: 'walking-trails-e8037.appspot.com',
    messagingSenderId: '225102397227',
    appId: '1:225102397227:web:4ed6326f39f572348e4f6e',
};

// We use IIFE to hide the private "app" variable
export const api = (() => {
    let app;
    let db;
    const trailsCollection = 'trails';
    return {
        initialize() {
            app = initializeApp(firebaseConfig);
            db = getFirestore(app);
        },
        async getTrails() {
            const _collection = collection(db, 'trails');
            const snapshot = await getDocs(_collection);

            const result = snapshot.docs.map((_doc) => ({
                [_doc.id]: _doc.data(),
            }));

            return result;
        },
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
        migrateTrails() {
            seedTrails.forEach((trail) => {
                this.writeDocument(trail.name, trail);
            });
        },
    };
})();
