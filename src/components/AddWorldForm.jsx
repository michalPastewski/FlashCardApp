import { useRef } from 'react';
import { useData } from '../contexts/DataProvider';
import { Button } from './Button';
import { FormInput } from './FormInput';
import { Modal } from './Modal';

import './addWordForm.style.scss';

export const AddWordForm = ({ onCancel }) => {
  const { addNewWord } = useData();
  const wordInput = useRef();
  const translationInput = useRef();
  const synonymsInput = useRef();
  const examplesInput = useRef();

  const createWordData = () => {
    return {
      word: wordInput.current.value,
      translation: translationInput.current.value,
      synonyms: synonymsInput.current.value,
      examples: examplesInput.current.value,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addNewWord(createWordData());
      onCancel(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal>
      <form className="add__form" onSubmit={handleSubmit}>
        <FormInput label="new word" type="text" autoFocus ref={wordInput} />
        <FormInput label="translation" type="text" ref={translationInput} />
        <FormInput label="synonyms" type="text" ref={synonymsInput} />
        <FormInput label="examples" type="text" ref={examplesInput} />
        <div className="add__form__buttons">
          <Button
            label="cancel"
            type="button"
            onClick={() => onCancel(false)}
          />
          <Button type="submit" label="add" appearance="submit" />
        </div>
      </form>
    </Modal>
  );
};
