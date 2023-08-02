import { useState } from 'react';
import './wordSection.style.scss';

export const WordList = () => {
  const [isTranslation, setIsTranslation] = useState(false);

  const handleCardStatus = (status) => {
    setIsTranslation(status);
  };

  return (
    <div className="words--container">
      {!isTranslation ? (
        <div
          className="words--card"
          onClick={() => handleCardStatus(!isTranslation)}>
          word 1
        </div>
      ) : (
        <div
          className="words--card"
          onClick={() => handleCardStatus(!isTranslation)}>
          translation 1
        </div>
      )}
    </div>
  );
};
