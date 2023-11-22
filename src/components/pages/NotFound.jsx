import React from 'react';
import PropTypes from 'prop-types';

export const NotFound = ({ message }) => {
  return <div className="notFoundMessage">{message}</div>;
};

NotFound.propTypes = {
  message: PropTypes.string.isRequired,
};
