import '../../App.scss';
import { useAuth } from '../../contexts/AuthProvider';
import { ActionsSection } from '../actionsSection/ActionsSection';
import { LoginSection } from '../loginSection/LoginSection';
import { WordSection } from '../wordSection/WordSection';

export const Home = () => {
  const { currentUser } = useAuth();

  return (
    <section className="content">
      {!currentUser ? (
        <LoginSection />
      ) : (
        <>
          <ActionsSection />
          <WordSection />
        </>
      )}
    </section>
  );
};
