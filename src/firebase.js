// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
    getFirestore,
    collection,
    getDocs
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4agorTgieP19ZrrAJWXU9cSbVSXngT5Y",
    authDomain: "applehub-74596.firebaseapp.com",
    projectId: "applehub-74596",
    storageBucket: "applehub-74596.appspot.com",
    messagingSenderId: "491654100481",
    appId: "1:491654100481:web:644f73463a94269929b200",
    measurementId: "G-Q8919ZS26C"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Init service
const db = getFirestore();

// collection ref
const colref = collection(db, 'products');

// get collection data
getDocs(colref)
    .then((snapshot) => {
        // console.log(snapshot.docs)
        let products = [];
        snapshot.docs.forEach((doc) => {
            products.push({ ...doc.data(), id: doc.id })
        })
        console.log(products)
    })
    .catch(err => {
        console.log(err.message)
    })