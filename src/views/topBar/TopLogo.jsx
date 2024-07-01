import logo from '../../assets/logo.png';
import { content } from '../../constant/contents';
import './topBar.style.scss';

export const TopLogo = () => {
  return (
    <div className="top__bar__logo">
      <img src={logo} alt="logo" className="top__bar__logo--image" />
      <p>
        <i>{content.logoDescription}</i>
      </p>
    </div>
  );
};
