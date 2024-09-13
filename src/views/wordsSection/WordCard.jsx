import { useState } from 'react';
import { BasicCardView } from './BasicCardView';
import { FullCardContent } from './FullCardContent';

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
    <section className="word__card">
      <BasicCardView
        cardData={wordData}
        id={id}
        cardExpand={setIsCardExpanded}
      />

      {isCardExpanded.isExpanded && (
        <FullCardContent
          id={id}
          cardPosition={isCardExpanded}
          cardData={wordData}
          onClose={cardExpandedStateReset}
        />
      )}
    </section>
  );
};
