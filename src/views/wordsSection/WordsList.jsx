import { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthProvider';
import { useData } from '../../contexts/DataProvider';
import { WordCard } from './WordCard';

import './wordsSection.style.scss';

export const WordList = () => {
  const { session } = useAuth();
  const { wordsCollection, getWordsCollection } = useData();

  useEffect(() => {
    if (session) {
      getWordsCollection();
    }
  }, [session, wordsCollection]);

  return (
    <>
      {wordsCollection.length > 0 ? (
        wordsCollection.map((item) => (
          <WordCard wordData={item} key={item.id} id={item.id} />
        ))
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};
