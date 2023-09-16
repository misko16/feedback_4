import React, { useState } from "react";

function ContactForm({ contacts, onAddContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) {
      alert("Please fill in all fields.");
      return;
    }
    
    onAddContact(name, number);
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter name"
        required
      />
      <input
        type="tel"
        name="number"
        pattern="[0-9]+"
        value={number}
        onChange={handleInputChange}
        placeholder="Enter phone number"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
