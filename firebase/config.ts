// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpS7n6geqVg8GzJpyDl0RXNOebvG9R6lc",
  authDomain: "gettar-f824d.firebaseapp.com",
  projectId: "gettar-f824d",
  storageBucket: "gettar-f824d.appspot.com",
  messagingSenderId: "221243048726",
  appId: "1:221243048726:web:1ee89bb4518393389e0637",
  measurementId: "G-TQ0PYGVFN0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/** firebase auth reference */
export const auth = getAuth();

/** firebase database reference */
export const db = getFirestore();
