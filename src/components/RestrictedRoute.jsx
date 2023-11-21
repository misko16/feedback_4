// RestrictedRoute.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuthAuthenticated } from 'redux/auth.selectors';

const RestrictedRoute = ({ children, redirectTo = '/contacts' }) => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (authenticated) {
      navigate(redirectTo, { replace: true });
    }
  }, [authenticated, navigate, redirectTo]);

  return authenticated ? null : children;
};

export default RestrictedRoute;
