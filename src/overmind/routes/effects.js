// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import {
    getDatabase, ref, onValue, child, get, set,
} from 'firebase/database';
import firebaseConfig from '../firebaseConfig';
import routeImports from '../../utils/routeImports';
import geoRoutes from '../../utils/geoJsonUtils';

// mock the backend by using local geoJSON imports
export const api = (() => ({
    initialize() {},
    loadRoutes() {
        return geoRoutes;
    },
}))();

// Use IIFE to hide outer private variables
// export const api = (() => {
//     let app;
//     let db;
//     return {
//         initialize() {
//             app = initializeApp(firebaseConfig);
//             db = getDatabase(app);
//         },
//         async getData() {
//             const routeRef = ref(db, '/buninyong');
//             onValue(routeRef, (snapshot) => {
//                 const data = snapshot.val();
//                 console.log(data);
//             });
//         },
//         async getDataOnce(_routeId) {
//             const dbRef = ref(getDatabase());
//             get(child(dbRef, _routeId))
//                 .then((snapshot) => {
//                     if (snapshot.exists()) {
//                         console.log(snapshot.val());
//                     }
//                     else {
//                         console.log('No data available');
//                     }
//                 })
//                 .catch((error) => {
//                     console.error(error);
//                 });
//         },
//         async migrateRoutes() {
//             // const geo = routeImports['creswick-circuit-walk'];
//             Object.entries(routeImports).forEach(([routeId, json]) => {
//                 set(ref(db, `${routeId}`), json);
//             });
//         },
//     };
// })();
