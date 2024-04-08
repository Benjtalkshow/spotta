import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { FirebaseAuthContext } from '../context/AuthContext';
import { PageLoader } from '../components';


const PublicRoute = ({ element: Component, ...rest }) => {
  const { isLoggedIn, loading } = useContext(FirebaseAuthContext);

  if (loading) {
    return <PageLoader />;
  }

  // Redirect logged-in users to another page
  if (isLoggedIn) {
    return <Navigate to="/" />; 
  }

  // Render the component if the user is not logged in
  return <Component {...rest} />;
};

export default PublicRoute;
