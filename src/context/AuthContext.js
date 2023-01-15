import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);

  //* to pass auth data //
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  function getUser() {
    return auth.currentUser;
  }

  //* to render components when comments are edited or removed //
  function editState() {
    setEdit(!edit);
  }
  const value = {
    currentUser,
    getUser,
    editState,
    edit,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
