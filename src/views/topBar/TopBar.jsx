import { Outlet } from 'react-router-dom';
// import { TopBarSearch } from './TopBarSearch';
import './topBar.style.scss';

export const TopBar = () => {
  return (
    <section className="top__bar">
      <div className="top__bar--logo">
        <h3>FishCard</h3>
        <p>
          <i>Your own story of language</i>
        </p>
      </div>
      {/* <TopBarSearch /> */}
      <Outlet />
    </section>
  );
};
