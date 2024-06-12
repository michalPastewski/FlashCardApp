import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  writeBatch,
} from 'firebase/firestore';
import { profileSignatureGenerator } from '../utils/helpers';
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

// TODO: this functionality was moved to AuthProvid
// export const createUserDocumentFromAuth = async (
//   userAuth,
//   additionalInformation = {}
// ) => {
//   if (!userAuth) return;

//   const userProfileSignature = profileSignatureGenerator(userAuth);
//   const userDocRef = doc(db, 'users', userProfileSignature);

//   const userSnapshot = await getDocs(userDocRef);

//   if (!userSnapshot.exists()) {
//     const { email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         email,
//         createdAt,
//         ...additionalInformation,
//       });
//       await initWordsCollection(db, userProfileSignature);
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   return userDocRef;
// };

export const initWordsCollection = async (db, userID) => {
  const initialWord = {
    word: 'hello',
    translation: 'cześć',
    synonyms: '',
    examples: '',
  };

  const batch = writeBatch(db);
  const collectionRef = collection(db, `users/${userID}/words`);
  const docRef = doc(collectionRef, initialWord.word);

  batch.set(docRef, initialWord);
  await batch.commit();
};

// Add words to the database.
export const addNewWord = async (userId, wordData) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, `users/${userId}/words`);
  const docRef = doc(collectionRef, wordData.word);

  batch.set(docRef, wordData);
  await batch.commit();

  console.log('Word was added', docRef);
};

// Fetch words list from database.
export const getWordsList = async (userId) => {
  const collectionRef = collection(db, `users/${userId}/words`);
  try {
    const querySnapshot = await getDocs(collectionRef);
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ id: doc.id, ...doc.data() });
    });
    return docs;
  } catch (e) {
    console.error(e.message);
  }
};
