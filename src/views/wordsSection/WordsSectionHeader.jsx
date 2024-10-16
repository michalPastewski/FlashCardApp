import './wordsSection.style.scss';

export const WordSectionHeader = ({ handleSortOrder }) => {
  const handleOnChange = (e) => {
    handleSortOrder(e.target.value);
  };

  return (
    <section className="words__section__set-order">
      <div className="select__wrapper">
        <label className="words__section__set-order--label">sort by</label>
        <select
          className="words__section__set-order--select"
          name="sortWords"
          id="sortWords"
          onChange={handleOnChange}>
          <option value="newest">newest</option>
          <option value="oldest">oldest</option>
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>
      </div>
    </section>
  );
};
