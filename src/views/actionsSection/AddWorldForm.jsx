import { Button } from '../../components/Button';
import { FormInput } from '../../components/FormInput';
import {Modal} from '../../components/Modal'

export const AddWordForm = ({ onCancel }) => {
  return (
    <Modal>
      <form className="add__form">
        <FormInput label="new word" type="text" autoFocus />
        <FormInput label="translation" type="text" />
        <FormInput label="synonyms" type="text" />
        <FormInput label="examples" type="text" />
        <div className="add__form__buttons">
          <Button
            label="cancel"
            type="button"
            onClick={() => onCancel(false)}
          />
          <Button label="add" buttonstyle="submit" />
        </div>
      </form>
    </Modal>
  );
};
