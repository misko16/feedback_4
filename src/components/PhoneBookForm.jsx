import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import Loader from './Loader';

const PhoneBookForm = ({ onSubmit, contacts, isLoading, onDeleteContact }) => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit(handleFormSubmit)}>
        <label>
          <span>Ім'я:</span>
          <input
            className='filterInput'
            {...register('name', { required: true })}
            type='text'
          />
          {formErrors.name && <span>Це поле є обов'язковим</span>}
        </label>
        <label>
          <span>Номер:</span>
          <input
            className='filterInput'
            {...register('number', { required: true })}
            type='text'
          />
          {formErrors.number && <span>Це поле є обов'язковим</span>}
        </label>

        <button className='submitButton' type='submit'>
          Додати контакт
        </button>
      </form>

      {isLoading && <Loader />}
      <ul className='contactList'>
        {Array.isArray(contacts) &&
          contacts.map((contact) => (
            <li className='contactItem' key={contact.id}>
              <h3>{contact.name}</h3>
              <p>{contact.number}</p>
              <button
                className='delete'
                onClick={() => onDeleteContact(contact.id)}
              >
                ❌
              </button>
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
