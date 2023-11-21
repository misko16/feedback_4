import  { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectAuthAuthenticated } from 'redux/auth.selectors';

const RestrictedRoute = ({ children, redirectTo = '/contacts' }) => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate(redirectTo, { replace: true });
    }
  }, [authenticated, navigate, redirectTo]);

  return authenticated ? null : children;
};

RestrictedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default RestrictedRoute;
