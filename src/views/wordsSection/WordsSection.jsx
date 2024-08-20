import { WordList } from './WordsList';

import './wordsSection.style.scss';

export const WordSection = () => {
  return (
    <article className="words__section">
      <WordList />
    </article>
  );
};
