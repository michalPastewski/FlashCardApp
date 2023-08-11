import { forwardRef } from 'react';
import './formInput.style.scss';

export const FormInput = forwardRef(function FormInput(props, ref) {
  const { label, ...otherProps } = props;

  return (
    <div className="form__input">
      <label className="form__input--label">{label}</label>
      <input className="form__input--input" {...otherProps} ref={ref}></input>
    </div>
  );
});
