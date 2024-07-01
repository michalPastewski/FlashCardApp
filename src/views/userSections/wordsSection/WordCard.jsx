import { useState } from 'react';

export const WordCard = ({ word, translation }) => {
  const [isTranslation, setIsTranslation] = useState(false);

  const handleCardStatus = (status) => {
    setIsTranslation(status);
  };

  return (
    <div
      className="words--card"
      onClick={() => handleCardStatus(!isTranslation)}
      onMouseLeave={() => setTimeout(() => setIsTranslation(false), 500)}>
      {!isTranslation ? word :  translation}
    </div>
  );
};
