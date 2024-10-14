import { CONTENT } from '../../constant/contents';
import { useAuth } from '../../contexts/AuthProvider';
import './topBar.style.scss';

export const TopBarHeader = () => {
  const { TOP_BAR } = CONTENT;
  const { session } = useAuth();

  return (
    <div className="top__bar--header">
      <h1>{session ? TOP_BAR.WORD_HEADER : TOP_BAR.WELCOME_HEADER}</h1>
    </div>
  );
};
