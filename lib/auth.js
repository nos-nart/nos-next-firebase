import React, {useState, useEffect, useContext, createContext} from 'react';
import firebase from './firebase';
import Router from 'next/router';
import cookie from 'js-cookie';

import { createUser } from './firestore';

const formatUser = async (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    token: user._lat,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};

const authContext = createContext();

export function ProvideAuth({children}) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser);
      const { token, ...userWithoutToken } = user;

      createUser(user.id, userWithoutToken);
      setUser(user);

      cookie.set('next-firebase-auth', true, { expires: 1 });

      return user;
    } else {
      setUser(false);
      cookie.remove('next-firebase-auth');

      return false;
    }
  }

  const signinWithGithub = (redirect) => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        handleUser(response.user);

        if (redirect) {
          Router.push(redirect);
        }
      })
  }

  const signinWithGoogle = (redirect) => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        handleUser(response.user);

        if (redirect) {
          Router.push(redirect);
        }
      })
  }

  const signout = () => {
    Router.push('/');

    return firebase
      .auth()
      .signOut()
      .then(() => {
        handleUser(false);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signinWithGoogle,
    signout
  };
}
