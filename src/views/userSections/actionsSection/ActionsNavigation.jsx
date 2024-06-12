import { Link } from 'react-router-dom';
import { Button } from '../../../components/Button';

export const ActionsNavigation = ({ onAddWorld }) => {
  return (
    <section className="actions__buttons">
      <Button
        className=" button action__button"
        label="ADD"
        size="large"
        onClick={() => {
          onAddWorld(true);
        }}
      />
      <Link to={'/learn'} className="button large-button action__button">
        <span>LEARN</span>
      </Link>
    </section>
  );
};
