import './button.style.scss';

export const Button = ({ label, ...otherProps }) => {
  let buttonStyle = '';

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
  return (
    <button
      className={`button
            ${otherProps.size === 'large' ? 'large-button' : ''} 
            ${buttonStyle}`}
      {...otherProps}>
      {label}
    </button>
  );
};
