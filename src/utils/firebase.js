import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getFirestore,
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

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userProfileSignature = profileSignatureGenerator(userAuth);
  const userDocRef = doc(db, 'users', userProfileSignature);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        email,
        createdAt,
        ...additionalInformation,
      });
      await initWordsCollection(db, userProfileSignature);
    } catch (error) {
      console.log(error.message);
    }
  }

  return userDocRef;
};

export const initWordsCollection = async (database, userID) => {
  const initialWord = {
    word: 'hello',
    translation: '',
    synonyms: '',
    examples: [],
  };

  const batch = writeBatch(database);
  const collectionRef = collection(database, `users/${userID}/words`);
  const docRef = doc(collectionRef, initialWord.word);

  batch.set(docRef, initialWord);
  await batch.commit();
};
