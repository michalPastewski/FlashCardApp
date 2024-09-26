import { CONTENT } from '../../constant/contents';
import { useAuth } from '../../contexts/AuthProvider';
import './topBar.style.scss';

export const TopBarHeader = () => {
  const {TOP_BAR} = CONTENT
  const { currentUser } = useAuth;

  return (
    <div className="top__bar--header">
      <h1>{currentUser ? TOP_BAR.WORD_SECTION_HEADER : TOP_BAR.WELCOME_HEADER}</h1>
    </div>
  );
};
