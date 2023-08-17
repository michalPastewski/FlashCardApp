import './topBar.style.scss';

export const TopBarSearch = () => {
  return (
    <form className="top__bar--search">
      <input type="search" placeholder="Search word" name="top-search" />
    </form>
  );
};
