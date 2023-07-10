import { useState } from 'react';
import { ActionsNavigation } from './ActionsNavigation';
import { AddWordForm } from './AddWorldForm';
import { LearnSection } from './LearnSection';
import './actionsSection.style.scss';

export const ActionsSection = () => {
  const [addForm, setAddForm] = useState(false);
  const [openLearnSection, setOpenLearnSection] = useState(false);

  return (
    <article className="actions">
      <ActionsNavigation 
         addFormState={addForm} 
         onAddWorld={setAddForm} 
         openLearnSectionState={openLearnSection}
         openLearnSectionHandler={setOpenLearnSection}
      />
      {addForm && <AddWordForm onCancel={setAddForm} />}
      {openLearnSection &&  <LearnSection onCancel={setOpenLearnSection} />}
    </article>
  );
};
