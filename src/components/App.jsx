import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm";
import Filter from "../refactoring/Filter";
import ContactList from "../refactoring/ContactList";

const Phonebook = () => {
  const [contacts, setContacts] = useState(() => {
    const storageContacts = localStorage.getItem("contacts");
    return storageContacts ? JSON.parse(storageContacts) : [];
  });
  
  const [filter, setFilter] = useState("");

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
    setContacts((prevState) => [
      ...prevState,
      { id: nanoid(), name, number },
    ]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };
  

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default Phonebook;
