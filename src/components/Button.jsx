import './button.style.scss';

export const Button = ({label, ...otherProps}) => {
   return (
      <button 
         className={
            `button 
            ${otherProps.size === 'large' ? 'large-button' : ""} 
            ${otherProps.buttonstyle === 'secondary' ? 'secondary-button' : otherProps.buttonstyle === 'submit' ? 'submit-button' : ""}`} 
         {...otherProps}
      >
         {label}
      </button>
   )
}