import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';

import ContactForm from "./ContactForm";
import Filter from "../refactoring/Filter";
import ContactList from "../refactoring/ContactList";
import { setFilter } from '../redux/appRedusers';
import {addContact, deleteContact, fetchContacts} from "../servise/ApiRequired"  

const Phonebook = () => {
  const contacts = useSelector(state => state.appReduser.contacts);
  const filter = useSelector(state => state.appReduser.filter);  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
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
