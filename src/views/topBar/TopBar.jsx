import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import { TopLogo } from './TopLogo';
import { TopNav } from './TopNav';
import { TopBarHeader } from './TopBarHeader';

import './topBar.style.scss';

export const TopBar = () => {
  const { currentUser } = useAuth();

  return (
    <section className="top__bar">
      <TopLogo />
      <TopBarHeader />

      {currentUser ? (
        <TopNav />
      ) : (
        <NavLink to="/login" className="button revers-button">
          sign in
        </NavLink>
      )}
      <Outlet />
    </section>
  );
};
