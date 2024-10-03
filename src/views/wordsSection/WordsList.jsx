import { useEffect, useState } from 'react';
import { useData } from '../../contexts/DataProvider';
import { WordCard } from './WordCard';

import './wordsSection.style.scss';

export const WordList = () => {
  const { wordsCollection } = useData();
  const [wordsData, setWordsData] = useState(null);

  useEffect(() => {
    setWordsData(wordsCollection);
  }, [wordsCollection]);

  return (
    <>
      {wordsData ? (
        wordsData.map((item) => (
          <WordCard wordData={item} key={item.id} id={item.id} />
        ))
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};
