// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwmoJkKTqJmOUP7SESpG9Xrp2Aaixg258",
  authDomain: "react-firebase-authinteg-3db73.firebaseapp.com",
  projectId: "react-firebase-authinteg-3db73",
  storageBucket: "react-firebase-authinteg-3db73.firebasestorage.app",
  messagingSenderId: "642731818679",
  appId: "1:642731818679:web:1697950044cebc0b765732",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
