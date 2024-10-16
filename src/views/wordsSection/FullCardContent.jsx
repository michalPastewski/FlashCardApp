import { useState } from 'react';
import { EditFullCardView } from './EditFullCardView';
import { FullCardContentNav } from './FullCardContentNav';

export const FullCardContent = ({ cardPosition, cardData, id, onClose }) => {
  const { topPosition, leftPosition, width } = cardPosition;
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
          width: width,
          top: topPosition - '75', //the number is a topBar height value
          left: leftPosition,
        }}>
        <section className="expanded__content__words--wrapper">
          {!isEditMode && (
            <FullCardContentNav onClose={onClose} editMode={handleEditMode} />
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
