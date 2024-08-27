import { useRef } from 'react';
import { useAuth } from '../contexts/AuthProvider';
import { useData } from '../contexts/DataProvider';
import { addNewWord } from '../utils/firebase';

import { Button } from './Button';
import { FormInput } from './FormInput';
import { Modal } from './Modal';

import './addWordForm.style.scss';

export const AddWordForm = ({ onCancel }) => {
  const { currentUser } = useAuth();
  const { getWordsCollection } = useData();
  const wordInput = useRef();
  const translationInput = useRef();
  const synonymsInput = useRef();
  const examplesInput = useRef();

  const createWordData = () => {
    return {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      word: wordInput.current.value,
      translation: translationInput.current.value,
      synonyms: synonymsInput.current.value,
      examples: examplesInput.current.value,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addNewWord(currentUser.uid, createWordData());
      await getWordsCollection();
      onCancel(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal>
      <form className="add__form" onSubmit={handleSubmit}>
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
            onClick={() => onCancel(false)}
          />
          <Button type="submit" label="add" appearance="submit" />
        </div>
      </form>
    </Modal>
  );
};
