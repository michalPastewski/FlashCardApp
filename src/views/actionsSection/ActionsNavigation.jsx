import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

export const ActionsNavigation = ({ onAddWorld }) => {
  return (
    <section className="actions__buttons">
      <Button
        label="add new word"
        size="large"
        onClick={() => {
          onAddWorld(true);
        }}
      />
      <Link to={'/learn'} className="button large-button">
        <span>learn</span>
      </Link>
    </section>
  );
};
