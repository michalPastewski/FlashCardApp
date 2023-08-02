import './formInput.style.scss';

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form__input">
      <label className="form__input--label">{label}</label>
      <input className="form__input--input" {...otherProps}></input>
    </div>
  );
};
