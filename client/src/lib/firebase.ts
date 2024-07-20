// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUbCrk0InESY2opgD82gRIROOVEfVUVM8",
  authDomain: "supergear-4d1c6.firebaseapp.com",
  projectId: "supergear-4d1c6",
  storageBucket: "supergear-4d1c6.appspot.com",
  messagingSenderId: "535188199775",
  appId: "1:535188199775:web:55e8d48c56b3d4680c3eea",
  measurementId: "G-5WB0MBYLTT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

// export const analytics = getAnalytics(app);
