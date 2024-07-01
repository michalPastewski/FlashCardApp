import { useState } from 'react';
import { AddWordForm } from '../../../components/AddWorldForm';
import './actionsSection.style.scss';

export const ActionsSection = () => {
  const [addForm, setAddForm] = useState(false);

  return (
    <article className="actions">
      {addForm && <AddWordForm onCancel={setAddForm} />}
    </article>
  );
};
