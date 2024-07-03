import { useState } from 'react';
import arrow from '../../../assets/arrow-down-sign-navigate.png';

export const WordCard = ({ word, translation }) => {
  const [isTranslation, setIsTranslation] = useState(false);

  const handleCardStatus = (status) => {
    setIsTranslation(status);
  };

  return (
    <div
      className="words__card"
      onClick={() => handleCardStatus(!isTranslation)}
      onMouseLeave={() => setTimeout(() => setIsTranslation(false), 500)}>
      <p className="words__card--text">{!isTranslation ? word : translation}</p>
      <div className="words__card__content">
        <img src={arrow} className="words__card__content--icon" />
      </div>
    </div>
  );
};
