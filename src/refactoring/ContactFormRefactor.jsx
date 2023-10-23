import React from 'react';

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
export default ContactFormRefactor;