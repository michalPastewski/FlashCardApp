import { useState } from 'react';
import { SignIn } from './SignIn';
import { SignUp } from './SingUp';
import './loginSection.style.scss';

export const LoginSection = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <section className="login__section">
      <article>
        {isSignUp ? <SignIn handelSignUpButton={setIsSignUp} /> : <SignUp onBack={setIsSignUp}/>}
      </article>
    </section>
  );
};
