// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, doc, getDocs, setDoc, deleteDoc,
} from 'firebase/firestore/lite';
import firebaseConfig from '../firebaseConfig';
import seedReviews from './seed';

// Use IIFE to hide outer private variables
export const api = (() => {
    let app;
    let db;
    const collectionName = 'reviews';
    return {
        initialize() {
            app = initializeApp(firebaseConfig);
            db = getFirestore(app);
        },
        // queries Firestore for trail data
        async nodeQuery() {
            const trailsObj = {};
            const _collection = collection(db, 'reviews');
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
            return seedReviews;
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

                await setDoc(doc(db, collectionName, documentName), {
                    ...json,
                });
            }
            catch (error) {
                console.error('Error writing new project to Firebase Database', error);
            }
        },
        // delete all documents from 'trails' individually
        async wipeReviews() {
            const _collection = collection(db, 'reviews');
            const snapshot = await getDocs(_collection);

            snapshot.docs.forEach(async (_doc) => {
                await deleteDoc(doc(_collection, _doc.id));
            });
        },
        // uploads our seed trail objects from seed.js
        async migrateReviews() {
            // seedReviews.forEach((review) => {
            //     this.writeDocument(review.id, review);
            // });

            Object.entries(seedReviews).forEach(async ([key, value]) => {
                await this.writeDocument(key, value);
            });
        },
    };
})();
