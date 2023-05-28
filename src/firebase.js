import { initializeApp } from "firebase/app";

import { 
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword, 
    sendPasswordResetEmail, 
    signOut  
    } from "firebase/auth";

import { 
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
  } from "firebase/firestore";


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