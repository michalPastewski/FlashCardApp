import { useEffect, useState } from 'react';
import { useAuth } from '../../../../contexts/AuthProvider';
import { getWordsList } from '../../../../utils/firebase';

import './wordSection.style.scss';

export const WordList = () => {
  const { currentUser } = useAuth();
  const [wordsCollection, setWordsCollection] = useState([]);

  console.log('Collection', wordsCollection);

  useEffect(() => {
    if (currentUser) {
      const data = getWordsList(currentUser.uid);
      data.then((resp) => setWordsCollection(resp));
    }
  }, [currentUser]);

  return (
    <div className="words--container">
      {wordsCollection.length > 0 ? (
        <WordCard wordsCollection={wordsCollection} />
      ) : (
        <div>Loading</div>
      )}
      {/* {!isTranslation ? (
        <div
          className="words--card"
          onClick={() => handleCardStatus(!isTranslation)}>
          {wordsCollection.length > 0 ? wordsCollection[0].word : 'hello'}
        </div>
      ) : (
        <div
          className="words--card"
          onClick={() => handleCardStatus(!isTranslation)}>
          translation 1
        </div>
      )} */}
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
          {props.wordsCollection[0].translation[0]}
        </div>
      )}
    </>
  );
};
