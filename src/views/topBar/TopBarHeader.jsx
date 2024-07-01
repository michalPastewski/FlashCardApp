import { content } from '../../constant/contents';
import './topBar.style.scss';

export const TopBarHeader = () => {
  return (
    <div className="top__bar--header">
      <h1>{content.topBarHeader}</h1>
    </div>
  );
};
