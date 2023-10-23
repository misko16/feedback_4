import React from 'react';
import PropTypes from 'prop-types'; 

  const ContactItem = ({contact, onDeleteContact}) => {
    const {name, number} = contact;
    const handleDelete = () => {
      onDeleteContact(contact.id);
    };
  
    return (
      <li>
        {name}: {number}
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </li>
    );
  }
  ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };
  
  export default ContactItem;