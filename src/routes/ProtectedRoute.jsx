// src/routes/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { FirebaseAuthContext } from '../context/AuthContext';
import { PageLoader } from '../components';


const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { user, loading, isLoggedIn } =  useContext(FirebaseAuthContext)

  if(loading) {
    return <PageLoader />
  }
  return user && isLoggedIn ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
    