import { useState } from 'react';
import expandArrow from '../../../assets/arrow-down-sign-navigate.png';
import { Button } from '../../../components/Button';
import { EditFullCardView } from './EditFullCardView';

export const FullCardView = ({ cardPosition, cardData, id, onClose }) => {
  const { topPosition, leftPosition } = cardPosition;
  const { word, translation, synonyms, examples } = cardData;

  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditMode = (e) => {
    e.preventDefault();
    setIsEditMode(!isEditMode);
  };

  const handleOnClose = (e) => {
    if (e.target.className === 'expanded__wrapper') {
      onClose();
    }
    return;
  };

  return (
    <article className="expanded__wrapper" onClick={(e) => handleOnClose(e)}>
      <div
        id={id}
        className="word__card expanded__content"
        style={{
          top: topPosition - '75', //the number is a topBar height value
          left: leftPosition,
        }}>
        <section className="expanded__content__words">
          {!isEditMode && (
            <div className="expanded__content__words__buttons edit">
              <div className="edit">
                <Button
                  label="edit"
                  appearance="secondary"
                  onClick={handleEditMode}
                />
              </div>
              <div className="word__card__content expanded">
                <img
                  src={expandArrow}
                  className="word__card__content--icon expanded"
                  onClick={onClose}
                />
              </div>
            </div>
          )}

          <section className="expanded__content__words--wrapper">
            {isEditMode ? (
              <EditFullCardView
                cardData={cardData}
                id={id}
                closeEdit={handleEditMode}
              />
            ) : (
              <>
                <p className="expanded__content__words--word">{word}</p>
                <p className="expanded__content__words--word">{translation}</p>
                <p className="expanded__content__words--word">{synonyms}</p>
                <p className="expanded__content__words--word">{examples}</p>
              </>
            )}
          </section>
        </section>
      </div>
    </article>
  );
};
