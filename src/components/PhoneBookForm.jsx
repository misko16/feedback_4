import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Loader from './Loader';

const PhoneBookForm = ({ onSubmit, contacts, isLoading, onDeleteContact }) => {
  const { register, handleSubmit, formState: { errors: formErrors } } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
        <label>
          <div className="filterInput">
            <span className="label">Ім&apos;я:</span>
            <input {...register('name', { required: true })} type="text" />
          </div>
          {formErrors.name && <div className="errorText">Це поле є обов&apos;язковим</div>}
        </label>
        <label>
          <div className="filterInput">
            <span className="label">Номер:</span>
            <input {...register('number', { required: true })} type="text" />
          </div>
          {formErrors.number && <div className="errorText">Це поле є обов&apos;язковим</div>}
        </label>

        <button className="submitButton" type="submit">
          Додати контакт
        </button>
      </form>

      {isLoading && <Loader />}
      <ul className="contactList">
        {Array.isArray(contacts) &&
          contacts.map((contact) => (
            <li key={contact.id} className="contactItem">
              <span className="name">{contact.name}</span>
              <span className="number">{contact.number}</span>
              <button onClick={() => onDeleteContact(contact.id)}>❌</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

PhoneBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default PhoneBookForm;
