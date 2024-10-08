import { createContext, useContext, useEffect, useState } from 'react';
import { userWordsData } from '../service/supabase_client';
import { useAuth } from './AuthProvider';

export const DataContext = createContext();
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const { session } = useAuth();
  const [wordsCollection, setWordsCollection] = useState([]);

  const getWordsCollection = async () => {
    await userWordsData.select().then(({ data }) => {
      setWordsCollection(data);
    });
  };

  const addNewWord = async (newWord) => {
    const { data, error } = await userWordsData.insert(newWord).select();

    if (error) {
      console.error(error);
    } else {
      setWordsCollection([...wordsCollection, ...data]);
      console.info('A new word was added');
    }
  };

  const updateWordData = async (newData, wordId) => {
    const { error } = await userWordsData.update(newData).eq('id', wordId);

    if (error) {
      console.error('Error updating data', error);
    } else {
      setWordsCollection((wordCollection) =>
        wordCollection.map((item) => {
          return item.id === wordId ? { ...item, ...newData } : item;
        })
      );
      console.info('The word data was updated');
    }
  };

  const deleteWord = async (wordId) => {
    const { error } = await userWordsData.delete().eq('id', wordId);

    if (error) {
      console.log(error);
    } else {
      setWordsCollection(wordsCollection.filter((item) => item.id !== wordId));
      console.info('The word was deleted');
    }
  };

  useEffect(() => {
    if (session) {
      getWordsCollection();
    } else {
      setWordsCollection([]);
    }
  }, [session]);

  const value = {
    wordsCollection,
    setWordsCollection,
    addNewWord,
    updateWordData,
    deleteWord,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
