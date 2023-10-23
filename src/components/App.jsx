import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import ContactForm from "./ContactForm";
import Filter from "../refactoring/Filter";
import ContactList from "../refactoring/ContactList";
import {addContact, deleteContact, setFilter} from "redux/appRedusers";


const Phonebook = () => {
  const contacts = useSelector(state => state.appReduser.contacts);
  const filter = useSelector(state => state.appReduser.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleaddContact = (name, number) => {
    dispatch(addContact({name, number}));
  };  

  const handledeleteContact = (contactId) => {
   dispatch(deleteContact(contactId));
  };
  

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        contacts={contacts}
        onAddContact={handleaddContact}
      />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={handledeleteContact} />
    </div>
  );
};

export default Phonebook;