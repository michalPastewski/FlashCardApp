import { useState } from 'react';

export const WordCard = ({ word, translation }) => {
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
          {word}
        </div>
      ) : (
        <div
          className="words--card"
          onClick={() => handleCardStatus(!isTranslation)}
          onMouseLeave={() => setTimeout(() => setIsTranslation(false), 500)}>
          {translation}
        </div>
      )}
    </>
  );
};
