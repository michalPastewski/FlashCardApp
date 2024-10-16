import { useEffect, useState } from 'react';
import { WordList } from './WordsList';
import { WordSectionHeader } from './WordsSectionHeader';

import './wordsSection.style.scss';

export const WordSection = () => {
  const [sortOrder, setSortOrder] = useState('newest');

  useEffect(() => {
    console.log(sortOrder)
  }, [sortOrder])

  return (
    <article className="words__section">
      <WordSectionHeader handleSortOrder={setSortOrder} />
      <WordList sortOrder={sortOrder}/>
    </article>
  );
};
