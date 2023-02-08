// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Navigate } from "react-router-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM9hFecwSOK8MOOFh3EgEWxzCSHg-LGIE",
  authDomain: "react-wind-database.firebaseapp.com",
  projectId: "react-wind-database",
  storageBucket: "react-wind-database.appspot.com",
  messagingSenderId: "491354610893",
  appId: "1:491354610893:web:57a614987fa0d1564edd84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      
    })
    .catch((error) => {
      console.log(error);
    });
};
