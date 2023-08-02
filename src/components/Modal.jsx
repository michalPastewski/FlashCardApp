import '../App.scss';

export const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal--item">{children}</div>
    </div>
  );
};
