import { NavLink } from 'react-router-dom';

export const Intro = () => {
  return (
    <>
      <h2>Introduction to FlashCards App</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deserunt
        laudantium consequuntur dolore maxime sint eius, possimus rem, delectus
        laboriosam doloribus dicta in est nam aliquam ipsam? Repellendus,
        veritatis ipsum?
      </p>
      <NavLink to="/login" className="button">
        SIGN IN
      </NavLink>
    </>
  );
};
