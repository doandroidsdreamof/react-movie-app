import React, { useContext, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = useContext(AuthContext);
  const auth = getAuth();
  const [logic, setLogic] = useState(false);
  const location = useLocation();

  /*

  *To check the current user to display the appropriate page.
  *For instance if the user is anonymous, this component will blocks the bookmark page

  */

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLogic(false);
    } else {
      setLogic(true);
    }
  });

  if (auth.currentUser.uid === null) {
    return <Navigate to="/" />;
  } else {
    return <>{children}</>;
  }
};

export default ProtectedRoute;
