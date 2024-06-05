import { createContext, useContext, useState } from 'react';
import { useAuth } from './AuthProvider';
import { getWordsList } from '../utils/firebase';

export const DataContext = createContext();
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [wordsCollection, setWordsCollection] = useState([]);

  const getWordsCollection = async () => {
    if (currentUser) {
      getWordsList(currentUser.uid)
         .then((resp) => setWordsCollection(resp));
    }
  };

  const value = {
    wordsCollection,
    getWordsCollection,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
