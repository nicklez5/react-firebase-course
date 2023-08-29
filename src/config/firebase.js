// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBWssMFDNWcuxyl2F8EwGx_DMveuShg4MY",
  authDomain: "fir-course-61191.firebaseapp.com",
  projectId: "fir-course-61191",
  storageBucket: "fir-course-61191.appspot.com",
  messagingSenderId: "116319313315",
  appId: "1:116319313315:web:63ce5684a2817c906d0e16",
  measurementId: "G-VCY7TG7PBJ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)
export const storage = getStorage(app)