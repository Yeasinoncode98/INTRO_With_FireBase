// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// Danger dont share config in public
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhQe-vEi64Xm3abCfTsXGgTtBu9pXe_qQ",
  authDomain: "email-password-auth-7379c.firebaseapp.com",
  projectId: "email-password-auth-7379c",
  storageBucket: "email-password-auth-7379c.firebasestorage.app",
  messagingSenderId: "101794178435",
  appId: "1:101794178435:web:129478893b3056816502b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
