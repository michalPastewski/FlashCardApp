import { useRef } from 'react';
import { Button } from '../../components/Button';
import { FormInput } from '../../components/FormInput';
import {useAuth} from '../../contexts/AuthProvider';
// import { InfoBox } from '../../components/InfoBox';

import './loginSection.style.scss';

export const SignUp = ({ onBack }) => {
  const {createAuthUserWithEmailAndPassword} = useAuth();
  
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      // TODO add handle for infoBox with message what went wrong.
      console.log('Registration failed');
      return;
    }

    try {
      await createAuthUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
      emailRef.current.value = '';
      passwordRef.current.value = '';
      confirmPasswordRef.current.value = '';
    } catch (error) {
      console.error('ERROR', error.message);
    }
  };

  return (
    <>
      <h3 className="login__section--header">
        To sing up fill the form below:
      </h3>
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
        <FormInput
          label="confirm password"
          type="password"
          ref={confirmPasswordRef}
          required
        />
        <div className="login__section--info">
          <div className="login__section--submit">
            <Button
              label="Back"
              buttonstyle=""
              type="button"
              onClick={() => onBack(true)}
            />
            <Button label="Sing up" buttonstyle="submit" type="submit" />
          </div>
        </div>
      </form>
    </>
  );
};
