import { useEffect, useState } from 'react';
import { useAuth } from '../../../../contexts/AuthProvider';
import { useData } from '../../../../contexts/DataProvider';

import './wordSection.style.scss';

export const WordList = () => {
  const { currentUser } = useAuth();
  const {wordsCollection, getWordsCollection} = useData();

  console.log('Collection', wordsCollection);

  useEffect(() => {
    if (currentUser) {
      getWordsCollection();
    }
  }, [currentUser]);

  return (
    <div className="words--container">
      {wordsCollection.length > 0 ? (
        <WordCard wordsCollection={wordsCollection} />
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

const WordCard = (props) => {
  const [isTranslation, setIsTranslation] = useState(false);

  const handleCardStatus = (status) => {
    setIsTranslation(status);
  };

  return (
    <>
      {!isTranslation ? (
        <div
          className="words--card"
          onClick={() => handleCardStatus(!isTranslation)}>
          {props.wordsCollection[0].word}
        </div>
      ) : (
        <div
          className="words--card"
          onClick={() => handleCardStatus(!isTranslation)}>
          {props.wordsCollection[0].translation}
        </div>
      )}
    </>
  );
};
