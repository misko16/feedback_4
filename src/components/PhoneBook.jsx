import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectContacts,
  selectContactsIsLoading,
} from '../redux/contacts.selectors';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from '../redux/contactsReduser';
import PhoneBookForm from './PhoneBookForm';

const PhoneBook = () => {
  const {
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onSubmit = async (contact) => {
    try {
      await dispatch(addContact(contact));
      reset();
    } catch (error) {
      console.error('Failed to add contact:', error.message);
    }
  };

  const onDeleteContact = async (contactId) => {
    try {
      await dispatch(deleteContact(contactId));
    } catch (error) {
      console.error('Failed to delete contact:', error.message);
    }
  };

  return (
    <div>
    <PhoneBookForm
      onSubmit={onSubmit}
      errors={errors}  
      contacts={contacts}
      isLoading={isLoading}
      onDeleteContact={onDeleteContact}
    />
  </div>
  );
};

export default PhoneBook;
