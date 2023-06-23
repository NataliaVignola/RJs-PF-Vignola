// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCayZzqU65CIRRiB_iBV6Z2qiZeCV8yUvc",
    authDomain: "reactjs-pf-vignola.firebaseapp.com",
    projectId: "reactjs-pf-vignola",
    storageBucket: "reactjs-pf-vignola.appspot.com",
    messagingSenderId: "405822010465",
    appId: "1:405822010465:web:bd45b0f63a11d1b196e620",
    measurementId: "G-B9WC4CE9QE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)