// Dont send firebase config to Public Repo

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlxtLCN8dPltAxTZ_4Mph1oZYBr8g5lyQ",
  authDomain: "simple-firebase-auth-41437.firebaseapp.com",
  projectId: "simple-firebase-auth-41437",
  storageBucket: "simple-firebase-auth-41437.firebasestorage.app",
  messagingSenderId: "877068172897",
  appId: "1:877068172897:web:b7570e16745b175f493420",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Intialize Firebase Authentication and get a reffernce to the service

export const auth = getAuth(app);
