import { useState } from 'react';
import { Button } from '../../components/Button';
import { AddWordForm } from './AddWorldForm';
import './actionsSection.style.scss';

export const ActionsSection = () => {
  const [addForm, setAddForm] = useState(false);

  return (
    <article className="actions">
      <section className="actions__buttons">
        {addForm ? (
          <>
            <Button
              label="add new world"
              size="large"
              onClick={() => {
                setAddForm(true);
              }}
            />
            <Button label="learn" size="large" disabled />
          </>
        ) : (
          <>
            <Button
              label="add new world"
              size="large"
              onClick={() => {
                setAddForm(true);
              }}
            />
            <Button
              label="learn"
              size="large"
              onClick={() => console.log('learn')}
            />
          </>
        )}
      </section>
      {addForm && <AddWordForm onCancel={setAddForm} />}
    </article>
  );
};
