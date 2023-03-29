// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_CUSTOM_API_KEY}`,
  authDomain: "robotarm-v0000.firebaseapp.com",
  databaseURL:
    "https://robotarm-v0000-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "robotarm-v0000",
  storageBucket: "robotarm-v0000.appspot.com",
  messagingSenderId: "368982431137",
  appId: "1:368982431137:web:f42b512744ded46268a7e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
