import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfDBpc3zeSzR7PJcCGa3tD1RQ7RJpyxAw",
    authDomain: "unichat-47868.firebaseapp.com",
    projectId: "unichat-47868",
    storageBucket: "unichat-47868.appspot.com",
    messagingSenderId: "966372862765",
    appId: "1:966372862765:web:be8dc5046c79e39de0c1a4",
    measurementId: "G-7QL1GNXHLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)