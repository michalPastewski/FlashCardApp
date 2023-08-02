import { useState } from 'react';
import { ActionsNavigation } from './ActionsNavigation';
import { AddWordForm } from './AddWorldForm';
import './actionsSection.style.scss';

export const ActionsSection = () => {
  const [addForm, setAddForm] = useState(false);

  return (
    <article className="actions">
      <ActionsNavigation onAddWorld={setAddForm} />
      {addForm && <AddWordForm onCancel={setAddForm} />}
    </article>
  );
};
