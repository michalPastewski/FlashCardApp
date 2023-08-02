import './infoBox.style.scss';

export const InfoBox = ({ ...otherProps }) => {
  return (
    <div className={`info__box ${otherProps.style}`}>
      <h3>!!! IMPORTANT INFORMATION !!!</h3>
      <p>
        This is the beta version of app and some functionality can be changed in
        future.
      </p>
    </div>
  );
};
