import logo from '../../assets/logo.png';
import { CONTENT } from '../../constant/contents';
import './topBar.style.scss';

export const TopLogo = () => {
  return (
    <div className="top__bar__logo">
      <img src={logo} alt="logo" className="top__bar__logo--image" />
      <p>
        <i>{CONTENT.TOP_BAR.LOGO_DESCRIPTION}</i>
      </p>
    </div>
  );
};
