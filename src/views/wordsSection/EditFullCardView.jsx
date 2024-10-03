import { useRef } from 'react';
import { Button } from '../../components/Button';
import { FormInput } from '../../components/FormInput';
import { useData } from '../../contexts/DataProvider';

export const EditFullCardView = ({ cardData, id, closeEdit }) => {
  const { word, translation, synonyms, examples } = cardData;
  const { updateWordData, deleteWord } = useData();

  const wordInput = useRef(word);
  const translationInput = useRef();
  const synonymsInput = useRef();
  const examplesInput = useRef();

  const handleOnUpdateWordData = async (e) => {
    const newData = {
      word: wordInput.current.value === word ? word : wordInput.current.value,
      translation:
        translationInput.current.value === translation
          ? translation
          : translationInput.current.value,
      synonyms:
        synonymsInput.current.value === synonyms
          ? synonyms
          : synonymsInput.current.value,
      examples:
        examplesInput.current.value === examples
          ? examples
          : examplesInput.current.value,
    };

    e.preventDefault();
    try {
      await updateWordData(newData, id);
      closeEdit(e);
    } catch (error) {
      console.log('Update world items problem', error);
    }
  };

  const handleOnDelete = async (e) => {
    e.preventDefault();
    deleteWord(id);
  };

  return (
    <form
      className="expanded__content__form"
      onSubmit={(e) => {
        handleOnUpdateWordData(e);
      }}>
      <FormInput label="word" defaultValue={word} ref={wordInput} autoFocus />
      <FormInput
        label="translation"
        defaultValue={translation}
        ref={translationInput}
      />
      <FormInput label="synonyms" defaultValue={synonyms} ref={synonymsInput} />
      <FormInput label="examples" defaultValue={examples} ref={examplesInput} />
      <div className="expanded__content__words__buttons">
        <Button
          type="button"
          label="delete"
          appearance="delete"
          size="small"
          onClick={(e) => {
            handleOnDelete(e);
          }}
        />
        <Button
          type="button"
          label="cancel"
          appearance="secondary"
          size="small"
          onClick={closeEdit}
        />
        <Button type="submit" label="save" appearance="submit" size="small" />
      </div>
    </form>
  );
};
