// RestrictedRoute.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redux/auth.selectors';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!authenticated) {
      navigate(redirectTo, { replace: true });
    }
  }, [authenticated, navigate, redirectTo]);

  return authenticated ? children : null;
};

export default PrivateRoute;
