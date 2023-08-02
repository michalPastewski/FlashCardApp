import { Button } from '../../components/Button';
import { FormInput } from '../../components/FormInput';
import { InfoBox } from '../../components/InfoBox';
import './loginSection.style.scss';

export const LoginSection = () => {
  return (
    <section className="login__section">
      <article>
        <h3 className="login__section--header"> You need to be sign in.</h3>
        <form>
          <FormInput label="e-mail" type="email" autoFocus />
          <FormInput label="password" type="password" />
          <div className="login__section--info">
            <p>
              If you don't have a account, you can create it here:
              <button className="login__section--button">sign up</button>
            </p>
            <div className="login__section--submit">
              <Button label="Sing in" buttonstyle="submit" />
            </div>
            <InfoBox style='warning' />
          </div>
        </form>
      </article>
    </section>
  );
};
