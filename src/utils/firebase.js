import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: 'AIzaSyCN3m417keIBMMoUoY86PRWaHeTaLvau7c',
  authDomain: 'flashcards-f0490.firebaseapp.com',
  projectId: 'flashcards-f0490',
  storageBucket: 'flashcards-f0490.appspot.com',
  messagingSenderId: '304053363049',
  appId: '1:304053363049:web:beef117c84112ff1785df8',
  measurementId: 'G-K08XELHNPY',
};

// Initialize Firebase.
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Access to Firebase database.
export const db = getFirestore();

// Authenticate with Firebase.
export const auth = getAuth();
