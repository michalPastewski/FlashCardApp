import { createContext, useContext, useState } from 'react';
import { getWordsList } from '../utils/firebase';
import { useAuth } from './AuthProvider';

export const DataContext = createContext();
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [wordsCollection, setWordsCollection] = useState([]);

  const getWordsCollection = async () => {
    if (currentUser) {
      return getWordsList(currentUser.uid)
        .then((resp) => setWordsCollection(resp));
    }

    return [];
  };

  const value = {
    wordsCollection,
    getWordsCollection,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
