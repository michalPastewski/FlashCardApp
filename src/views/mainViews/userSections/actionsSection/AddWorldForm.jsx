import { useRef } from 'react';
import { Button } from '../../../../components/Button';
import { FormInput } from '../../../../components/FormInput';
import { Modal } from '../../../../components/Modal';
import { useAuth } from '../../../../contexts/AuthProvider';
import { addNewWord } from '../../../../utils/firebase';

export const AddWordForm = ({ onCancel }) => {
  const { currentUser } = useAuth();
  const wordInput = useRef();
  const translationInput = useRef();
  const synonymsInput = useRef();
  const examplesInput = useRef();

  const createWordData = () => {
    const wordData = {
      word: wordInput.current.value,
      translation: [],
      synonyms: [],
      examples: [],
    };

    wordData.translation.push(translationInput.current.value);
    wordData.synonyms.push(synonymsInput.current.value);
    wordData.examples.push(examplesInput.current.value);

    return wordData;
  };

  const onClick = async () => {
    const newWord = createWordData();

    await addNewWord(currentUser.uid, newWord);
  };

  return (
    <Modal>
      <form className="add__form">
        <FormInput
          label="new word"
          type="text"
          autoFocus
          ref={wordInput}
          onChange={() => console.log(wordInput.current.value)}
        />
        <FormInput label="translation" type="text" ref={translationInput} />
        <FormInput label="synonyms" type="text" ref={synonymsInput} />
        <FormInput label="examples" type="text" ref={examplesInput} />
        <div className="add__form__buttons">
          <Button
            label="cancel"
            type="button"
            // onClick={() => onCancel(false)}
            onClick={() => onClick()}
          />
          <Button label="add" appearance="submit" onClick={() => onClick()} />
        </div>
      </form>
    </Modal>
  );
};
