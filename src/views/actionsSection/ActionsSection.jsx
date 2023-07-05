import { useState } from 'react';
import { Button } from '../../components/Button';
import { FormInput } from '../../components/FormInput';
import './actionsSection.style.scss';

export const ActionsSection = () => {
   const [addForm, setAddForm]= useState(false);

   return (
      <article className='actions'>
         <section className='actions__buttons'>
            <Button label='add new world' size='large' onClick={()=> {setAddForm(true)}}/>
            <Button label='learn' size='large' onClick={()=>console.log('learn')}/>
         </section>

      {addForm && (
         <form className='add__form'>
            <FormInput label="new word" type='text' />             
            <FormInput label="translation" type='text' />             
            <FormInput label="synonyms" type='text' />             
            <FormInput label="examples" type='text' />    
            <div className='add__form__buttons'>
               <Button label="cancel" type='button' onClick={() => {setAddForm(false)}}/>
               <Button label="add" buttonstyle='submit' />
            </div>         
         </form>
      )}
      </article>
   )
}