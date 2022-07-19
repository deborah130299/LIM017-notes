// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7JX5bHhCsrhDSffK_No0Yo-1WHOJoKOA",
  authDomain: "note-it-react-firebase.firebaseapp.com",
  projectId: "note-it-react-firebase",
  storageBucket: "note-it-react-firebase.appspot.com",
  messagingSenderId: "4729192151",
  appId: "1:4729192151:web:1f3cb3e4dc53f3eab4ba92",
  measurementId: "G-QPVT925B41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const timestamp = serverTimestamp();
export const auth = getAuth();


export { app, db, timestamp };


