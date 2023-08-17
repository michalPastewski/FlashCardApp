import { WordList } from './WordList';
import { WordSectionHeader } from './WordSectionHeader';

import './wordSection.style.scss';

export const WordSection = () => {
  return (
    <article className="words">
      <WordSectionHeader />
      <WordList />
    </article>
  );
};
