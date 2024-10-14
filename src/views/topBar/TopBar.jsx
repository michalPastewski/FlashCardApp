import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import { TopBarHeader } from './TopBarHeader';
import { TopLogo } from './TopLogo';
import { TopNav } from './TopNav';

import './topBar.style.scss';

export const TopBar = () => {
  const { session } = useAuth();
  console.log(session);

  return (
    <section className="top__bar">
      <TopLogo />
      <TopBarHeader />

      {session ? (
        <TopNav />
      ) : (
        <NavLink to="/signin" className="top__bar__button button normal-button primary-button">
          sign in
        </NavLink>
      )}
      <Outlet />
    </section>
  );
};
