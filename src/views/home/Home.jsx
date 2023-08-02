import '../../App.scss';
import { ActionsSection } from '../actionsSection/ActionsSection';
import { WordSection } from '../wordSection/WordSection';

export const Home = () => {
  return (
    <section className="content">
      <ActionsSection />
      <WordSection />
      
    </section>
  );
};
