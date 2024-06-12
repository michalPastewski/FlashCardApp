import { WordList } from './WordsList';
import { WordSectionHeader } from './WordsSectionHeader';

import './wordsSection.style.scss';

export const WordSection = () => {
  return (
    <article className="words">
      <WordSectionHeader />
      <WordList />
    </article>
  );
};
