import { useEffect } from 'react';
import { useAuth } from '../../../contexts/AuthProvider';
import { useData } from '../../../contexts/DataProvider';
import { WordCard } from './WordCard';

import './wordsSection.style.scss';

export const WordList = () => {
  const { currentUser } = useAuth();
  const { wordsCollection, getWordsCollection } = useData();

  useEffect(() => {
    if (currentUser) {
      getWordsCollection();
    }
  }, [currentUser, wordsCollection.length]);

  return (
    <div className="words--container">
      {wordsCollection.length > 0 ? (
        wordsCollection.map((item) => (
          <WordCard
            word={item.word}
            translation={item.translation}
            key={item.id}
          />
        ))
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
