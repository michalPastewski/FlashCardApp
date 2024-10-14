import { NavLink } from 'react-router-dom';
import { CONTENT } from '../constant/contents';
import './introSection.style.scss';

export const Intro = () => {
  const { INTRO_CONTENT } = CONTENT;
  return (
    <>
      <article className="intro__content">
        <header className="intro__header">
          <p className="intro__header--paragraph">
            {INTRO_CONTENT.HEADER_PARAGRAPH}
          </p>
        </header>
        <section className="intro__description">
          <h3 className="intro__description--header">
            {INTRO_CONTENT.DESCRIPTION_HEADER}
          </h3>
          <p className="intro__description--paragraph one">
            {INTRO_CONTENT.DESCRIPTION_PARA_ONE}
          </p>
          <p className="intro__description--paragraph two">
            {INTRO_CONTENT.DESCRIPTION_PARA_TWO}
          </p>
        </section>
        <section className="intro__buttons">
          <NavLink to="/signup" className="button normal-button secondary-button">
            SIGN UP
          </NavLink>
          <NavLink to="/signin" className="button normal-button submit-button">
            SIGN IN
          </NavLink>
        </section>
      </article>
    </>
  );
};
