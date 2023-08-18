import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'carpooling-mobile-app.firebaseapp.com',
  databaseURL: 'https://carpooling-mobile-app-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'carpooling-mobile-app',
  storageBucket: 'carpooling-mobile-app.appspot.com',
  messagingSenderId: '1009356806276',
  appId: '1:1009356806276:web:8817c7fa74d54a801f8ad1',
  measurementId: 'G-P2RPQ36GKG',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

export { db, auth };
