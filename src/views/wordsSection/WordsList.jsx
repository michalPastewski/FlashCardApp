import { useEffect, useState } from 'react';
import { useData } from '../../contexts/DataProvider';
import { sortWordsByOrder } from '../../utils/helpers';
import { WordCard } from './WordCard';

import './wordsSection.style.scss';

export const WordList = ({ sortOrder }) => {
  const { wordsCollection } = useData();
  const [wordsData, setWordsData] = useState(null);

  useEffect(() => {
    const sortedWords = sortWordsByOrder(wordsCollection, sortOrder);

    setWordsData(sortedWords);
  }, [wordsCollection, sortOrder]);

  return (
    <div className="words__section__list">
      {wordsData ? (
        wordsData.map((item) => (
          <WordCard wordData={item} key={item.id} id={item.id} />
        ))
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
