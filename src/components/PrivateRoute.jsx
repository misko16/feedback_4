
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { selectAuthAuthenticated } from 'redux/auth.selectors';

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
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default PrivateRoute;
