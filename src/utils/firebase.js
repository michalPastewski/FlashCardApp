import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';
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

export const initWordsCollection = async (db, userID) => {
  const initialWord = {
    id: Date.now().toString(),
    date: new Date().toLocaleDateString(),
    word: 'hello',
    translation: '',
    synonyms: '',
    examples: '',
  };

  const batch = writeBatch(db);
  const collectionRef = collection(db, `users/${userID}/words`);
  const docRef = doc(collectionRef, initialWord.id);

  batch.set(docRef, initialWord);
  await batch.commit();
};

// Add words to the database.
export const addNewWord = async (userId, wordData) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, `users/${userId}/words`);
  const docRef = doc(collectionRef, wordData.id);

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

// update word data

export const updateWordData = async (userId, wordId, newData) => {
  try {
    const collectionRef = collection(db, `users/${userId}/words`);
    const docRef = doc(collectionRef, wordId);
    await updateDoc(docRef, newData);
    console.log('The word was updated');
  } catch (error) {
    console.error('There is problem with update word data', error);
  }
};

//delete word
export const deleteWord = async (userId, wordId) => {
  try {
    const collectionRef = collection(db, `users/${userId}/words`);
    await deleteDoc(doc(collectionRef, wordId));
    console.info(`The word was deleted`);
  } catch (error) {
    console.error('Failed to delete document:', error);
  }
};
