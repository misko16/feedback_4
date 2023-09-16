import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    const storageContacts = localStorage.getItem("contacts");
    if (storageContacts) {
      setContacts(JSON.parse(storageContacts));
    }
  }, []);

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

    const id = nanoid();
    const newContact = { id, name, number };
    setContacts([...contacts, newContact]);
    setName("");
    setNumber("");
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleInputChange = (inputName, inputValue) => {
    if (inputName === "name") {
      setName(inputValue);
    } else if (inputName === "number") {
      setNumber(inputValue);
    }
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        onInputChange={handleInputChange}
        onSubmit={() => addContact(name, number)}
        name={name}
        number={number}
      />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default Phonebook;