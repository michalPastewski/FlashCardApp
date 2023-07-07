import './formInput.style.scss';

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form__input">
      <input className="form__input--input" {...otherProps}></input>
      <label className="form__input--label">{label}</label>
    </div>
  );
};
