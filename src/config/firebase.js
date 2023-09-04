// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {  getFirestore } from "firebase/firestore"




const firebaseConfig = {
  apiKey: "AIzaSyC1ProhyLCj7Q6BUPZbQl0CCqJj-3MJ1rQ",
  authDomain: "crypto-tracker-36c4c.firebaseapp.com",
  projectId: "crypto-tracker-36c4c",
  storageBucket: "crypto-tracker-36c4c.appspot.com",
  messagingSenderId: "584045517148",
  appId: "1:584045517148:web:2d933893f894776cc8c999"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider= new GoogleAuthProvider()
export const db = getFirestore()