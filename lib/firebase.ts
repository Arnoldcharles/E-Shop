// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUiT3gA0fHfZMtnmMRwA8-Dz2_b3DOXSQ",
  authDomain: "multistore-5effa.firebaseapp.com",
  projectId: "multistore-5effa",
  storageBucket: "multistore-5effa.firebasestorage.app",
  messagingSenderId: "234381117679",
  appId: "1:234381117679:web:6a75f5f4898f5369d8331a",
  measurementId: "G-RMLKJWM5SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);