import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from "./ContactForm";
import Filter from "../refactoring/Filter";
import ContactList from "../refactoring/ContactList";
import { addContact, deleteContact, setFilter } from "redux/appRedusers";
import { fetchRequest } from 'servise/ApiRequired';

const Phonebook = () => {
  const contacts = useSelector(state => state.appReduser.contacts);
  const filter = useSelector(state => state.appReduser.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!contacts) return;
    dispatch(fetchRequest(contacts));
  }, [contacts, dispatch]);

  const handleAddContact = (name, number) => {
    const existingContact = contacts.items.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const filteredContacts = Array.isArray(contacts.items)
    ? contacts.items.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default Phonebook;
