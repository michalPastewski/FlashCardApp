import { useState } from 'react';
import { BasicCardView } from './BasicCardView';
import { FullCardView } from './FullCardView';

const cardExpandedInitialState = {
  isExpand: false,
  topPosition: null,
  leftPosition: null,
};

export const WordCard = ({ wordData, id }) => {
  const [isCardExpanded, setIsCardExpanded] = useState(
    cardExpandedInitialState
  );

  const cardExpandedStateReset = () => {
    setIsCardExpanded(cardExpandedInitialState);
  };

  return (
    <>
      <BasicCardView
        cardData={wordData}
        id={id}
        cardExpand={setIsCardExpanded}
      />

      {isCardExpanded.isExpanded && (
        <FullCardView
          id={id}
          cardPosition={isCardExpanded}
          cardData={wordData}
          onClose={cardExpandedStateReset}
        />
      )}
    </>
  );
};
