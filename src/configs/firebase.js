
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDi86VRMr2B0gCtYPYjX-BOYxIrB--q-fs",
    authDomain: "shopping-list-9d376.firebaseapp.com",
    projectId: "shopping-list-9d376",
    storageBucket: "shopping-list-9d376.appspot.com",
    messagingSenderId: "225035046170",
    appId: "1:225035046170:web:e8b86b122b36f515e570a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const timestamp = () => serverTimestamp();
const auth = getAuth(app);

// exports
export { db, timestamp, auth }