import { createContext, useContext, useEffect, useState } from 'react';
import { userAuthorization } from '../service/supabase_client';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    await userAuthorization.signUp({
      email: email,
      password: password,
    });
  };

  const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    await userAuthorization.signInWithPassword({
      email: email,
      password: password,
    });
  };

  const signOutUser = async () => {
    await userAuthorization.signOut();
  };

  useEffect(() => {
    userAuthorization.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = userAuthorization.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const value = {
    session,
    createAuthUserWithEmailAndPassword,
    signInAuthUserWithEmailAndPassword,
    signOutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
