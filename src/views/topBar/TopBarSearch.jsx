import { useRef } from 'react';
import './topBar.style.scss';

export const TopBarSearch = () => {
  // const searchInput = useRef();

  // const handleOnChange = () => {
  //   console.log(searchInput);
  // };

  return (
    <input
      type="search"
      placeholder="search"
      name="top-search"
      className="top__bar--input"
      // ref={searchInput}
      // onChange={() => handleOnChange()}
    />
  );
};
