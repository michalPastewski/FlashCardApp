import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { FormInput } from '../../components/FormInput';
import { useAuth } from '../../contexts/AuthProvider';
// import { InfoBox } from '../../components/InfoBox';

import './loginSection.style.scss';

// TODO: add handler for error if occurred the problems with the sign in process.

export const SignIn = ({ handelSignUpButton }) => {
  const { signInAuthUserWithEmailAndPassword } = useAuth();
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
      console.info('User is sign in successfully');
      navigate('/');
    } catch (error) {
      passwordRef.current.value = '';
      console.error('ERROR', error.message);
    }
  };

  return (
    <>
      <h3 className="login__section--header"> You need to be sign in.</h3>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="e-mail"
          type="email"
          ref={emailRef}
          autoFocus
          required
        />
        <FormInput
          label="password"
          type="password"
          ref={passwordRef}
          required
        />
        <div className="login__section--info">
          <p>
            If you don't have a account, you can create it here:
            <button
              className="login__section--button"
              type="button"
              onClick={() => handelSignUpButton(false)}>
              sign up
            </button>
          </p>
          <div className="login__section--submit">
            <Button label="Sing in" appearance="submit" type="submit" />
          </div>
          {/* <InfoBox style="warning" /> */}
        </div>
      </form>
    </>
  );
};
