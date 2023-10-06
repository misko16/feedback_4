import { useDispatch, useSelector } from "react-redux";
import {ContactFormRefactor} from "refactoring/contactForm";

  function ContactForm({  onAddContact }) {

  const name = useSelector((state) => state.name);
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      dispatch({type: 'contactForm/name', payload: ''});                            value
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
    <ContactFormRefactor
    handleInputChange={handleInputChange}
    handleSubmit={handleSubmit}
    name={name}
    number={number}
    />
  );
}

export default ContactForm;
