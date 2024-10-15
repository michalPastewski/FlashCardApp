import { useRef } from 'react';
import { useData } from '../../contexts/DataProvider';
import './topBar.style.scss';

export const TopBarSearch = () => {
  const { wordsCollection, setWordsCollection, filterWordsData } = useData();
  const searchInput = useRef();

  const handleOnChange = () => {
    filterWordsData(searchInput.current.value);
  };

  return (
    <input
      type="search"
      placeholder="search"
      name="top-search"
      className="top__bar--input"
      ref={searchInput}
      onChange={() => handleOnChange()}
    />
  );
};
