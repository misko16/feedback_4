import React from 'react';
import PropTypes from 'prop-types'; 

const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  const handleDelete = () => {
    onDeleteContact(id);
  };

  return (
    <li className='contactItem '>
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
