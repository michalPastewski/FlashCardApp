export const sortWordsByOrder = (wordsData, sortOrder) => {
  let sortedList = [];

  switch (sortOrder) {
    case 'newest':
      sortedList = [...wordsData].sort(
        (a, b) =>
          createNumberFromDataTimeProperties(b.created_at) -
          createNumberFromDataTimeProperties(a.created_at)
      );
      break;
    case 'oldest':
      sortedList = [...wordsData].sort(
        (a, b) =>
          createNumberFromDataTimeProperties(a.created_at) -
          createNumberFromDataTimeProperties(b.created_at)
      );
      break;
    case 'a-z':
      sortedList = [...wordsData].sort((a, b) => {
        return a.word.localeCompare(b.word);
      });
      break;
    case 'z-a':
      sortedList = [...wordsData].sort((a, b) => {
        return b.word.localeCompare(a.word);
      });
      break;
    default:
      sortedList = wordsData;
  }
  return sortedList;
};

function createNumberFromDataTimeProperties(dateString) {
  const date = dateString.slice(0, 10).split('-').join('');
  const time = dateString.slice(11, 19).split(':').join('');
  return Number(date.concat(time));
}
