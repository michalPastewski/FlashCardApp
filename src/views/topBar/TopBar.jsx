import { Outlet } from 'react-router-dom';
// import { TopBarSearch } from './TopBarSearch';
import { Button } from '../../components/Button';
import { useAuth } from '../../contexts/AuthProvider';
import './topBar.style.scss';

export const TopBar = () => {
  const { currentUser, signOutUser } = useAuth();

  return (
    <section className="top__bar">
      <div className="top__bar--logo">
        <h3>FlashCards</h3>
        <p>
          <i>Your own story of language</i>
        </p>
      </div>
      <div>
        {currentUser ? (
          <Button label="SIGN OUT" onClick={signOutUser} />
        ) : (
          `Hello`
        )}
      </div>
      {/* <TopBarSearch /> */}
      <Outlet />
    </section>
  );
};
