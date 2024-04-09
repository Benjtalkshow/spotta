import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { FirebaseAuthContext } from '../context/AuthContext';
import { PageLoader } from '../components';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { user, loading, isLoggedIn } = useContext(FirebaseAuthContext);
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    if (!loading) {
      setAuthLoaded(true);
    }
  }, [loading]);

  if (!authLoaded) {
    return <PageLoader />;
  }

  return user && isLoggedIn ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;