import expandArrow from '../../assets/arrow-down-sign-navigate.png';
import { Button } from '../../components/Button';

export const FullCardContentNav = ({ onClose, editMode }) => {
  return (
    <div className="expanded__content__words__buttons">
      <Button
        label="edit"
        appearance="secondary"
        size="small"
        onClick={(e) => editMode(e)}
      />

      <div className="word__card__basic_view__button expanded">
        <img
          src={expandArrow}
          className="word__card__basic_view__button--icon expanded"
          onClick={onClose}
        />
      </div>
    </div>
  );
};
