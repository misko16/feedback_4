import React, { useState } from "react";
import { useDispatch } from "react-redux";

import ContactFormRefactor from "refactoring/ContactFormRefactor";

function ContactForm({ onAddContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch(); 


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
      alert("Please fill in all fiends.");
      return;
    }

    onAddContact(name, number);
    setName("");
    setNumber("");
  };

  return (
    <ContactFormRefactor
      name={name}
      number={number}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
    />
  );
}

export default ContactForm;
