import React from 'react';
import PropTypes from 'prop-types'; 

const ContactFormRefactor = ({
    handleSubmit, handleInputChange, name , number}) => {
    return(
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter name"
          required
        />
        <input
          type="tel"
          name="number"
          pattern="[0-9]+"
          value={number}
          onChange={handleInputChange}
          placeholder="Enter phone number"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
}
ContactFormRefactor.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactFormRefactor;