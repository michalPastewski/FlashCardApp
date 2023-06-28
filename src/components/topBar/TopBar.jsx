import { TopBarSearch } from './TopBarSearch';
import './topBar.style.scss';

export const TopBar = () => {
  return (
    <section className="top__bar">
      <div className="top__bar--logo">FiszkaApp</div>
      <TopBarSearch />
    </section>
  );
};
