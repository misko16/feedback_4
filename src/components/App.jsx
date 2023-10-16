import { useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm";
import Filter from "../refactoring/Filter";
import ContactList from "../refactoring/ContactList";
import { useSelector, useDispatch } from "react-redux";
import { setContacts, setFilter, addForm } from "redux/parts/contactsReduser";

const Phonebook = () => {
  const contacts = useSelector((state) => state.contacts.data);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const nameLower = name.toLowerCase();
    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === nameLower
    );
    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addForm({ id: nanoid(), name, number }));
  };
  
  const deleteContact = (contactId) => {
    dispatch(setContacts(contacts.filter((contact) => contact.id !== contactId)));
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
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default Phonebook;
