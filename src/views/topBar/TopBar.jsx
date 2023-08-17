import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { useAuth } from '../../contexts/AuthProvider';
// import { TopBarSearch } from './TopBarSearch';

import './topBar.style.scss';

export const TopBar = () => {
  const { currentUser, signOutUser } = useAuth();
  const navigate = useNavigate();

  const onSignOut = async () => {
    await signOutUser();
    navigate('/');
  };

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
          <Button label="SIGN OUT" onClick={onSignOut} appearance="revers" />
        ) : (
          <NavLink to="/login" className="button revers-button">
            SIGN IN
          </NavLink>
        )}
      </div>
      {/* <TopBarSearch /> */}
      <Outlet />
    </section>
  );
};
