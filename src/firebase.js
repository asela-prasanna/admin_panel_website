import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "carpooling-website-d4ec4.firebaseapp.com",
  projectId: "carpooling-website-d4ec4",
  storageBucket: "carpooling-website-d4ec4.appspot.com",
  messagingSenderId: "380661178730",
  appId: "1:380661178730:web:79b01eca3d0043c1bc8513"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();