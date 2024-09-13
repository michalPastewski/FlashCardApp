import './button.style.scss';

export const Button = ({ label, ...otherProps }) => {
  let buttonStyle = '';
  let buttonSize = '';

  switch (otherProps.appearance) {
    case 'primary':
      buttonStyle = 'primary-button';
      break;
    case 'secondary':
      buttonStyle = 'secondary-button';
      break;
    case 'submit':
      buttonStyle = 'submit-button';
      break;
    case 'revers':
      buttonStyle = 'revers-button';
      break;
    case 'delete':
      buttonStyle = 'delete-button';
      break;
  }

  switch (otherProps.size) {
    case 'small':
      buttonSize = 'small-button';
      break;
    case 'large':
      buttonStyle = 'large-button';
      break;
    default:
      buttonSize = 'normal-button';
  }

  return (
    <button
      className={`button
            ${buttonSize} 
            ${buttonStyle}`}
      {...otherProps}>
      {label}
    </button>
  );
};
