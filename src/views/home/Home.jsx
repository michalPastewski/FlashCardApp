import '../../App.scss';
import { ActionsSection } from '../actionsSection/ActionsSection';
import { LoginSection } from '../loginSection/LoginSection';
import { WordSection } from '../wordSection/WordSection';

export const Home = () => {
  return (
    <section className="content">
      <ActionsSection />
      <WordSection />
      <LoginSection />
    </section>
  );
};
