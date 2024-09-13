import { useState } from 'react';
import expandArrow from '../../assets/arrow-down-sign-navigate.png';

export const BasicCardView = ({ cardData, id, cardExpand }) => {
  const { word, translation } = cardData;
  const [isTranslation, setIsTranslation] = useState(false);

  const handleCardStatus = (status) => {
    setIsTranslation(status);
  };

  const handleOpenFullCardView = (e) => {
    cardExpand({
      isExpanded: true,
      width: e.target.parentElement.parentElement.parentElement.clientWidth,
      topPosition: e.target.parentElement.parentElement.parentElement.offsetTop,
      leftPosition:
        e.target.parentElement.parentElement.parentElement.offsetLeft,
    });
  };

  return (
    <div
      id={id}
      className="word__card__basic_view"
      onClick={() => handleCardStatus(!isTranslation)}
      onMouseLeave={() => setTimeout(() => setIsTranslation(false), 500)}>
      <p className="word__card__basic_view--text">
        {!isTranslation ? word : translation}
      </p>
      <div
        className="word__card__basic_view__button"
        onClick={(e) => handleOpenFullCardView(e)}>
        <img
          src={expandArrow}
          className="word__card__basic_view__button--icon"
        />
      </div>
    </div>
  );
};
