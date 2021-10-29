// Import the functions you need from the SDKs you need

//import firebase from "firebase/compat/app"

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGjT6htDiZtKTDHfwwef1EkdZAr7iq_F4",
  authDomain: "basic-auth-redux-firebase.firebaseapp.com",
  projectId: "basic-auth-redux-firebase",
  storageBucket: "basic-auth-redux-firebase.appspot.com",
  messagingSenderId: "805909673343",
  appId: "1:805909673343:web:0fb53fa0217c4c2c17564a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();


export const provider = new GoogleAuthProvider();
//export const provider=new firebase.auth.GoogleAuthProvider();

