import { useDispatch, useSelector } from "react-redux";
import ContactFormRefactor from "refactoring/contactForm";
import { setName, setNumber } from "redux/parts/contactFormReduser";

function ContactForm({ onAddContact }) {
  const name = useSelector(
    (state) => state.contactForm.name);
  const number = useSelector(
    (state) => state.contactForm.number);
  const dispatch = useDispatch();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      dispatch(setName(value));
    } else if (name === "number") {
      dispatch(setNumber(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) {
      alert("Please fill in all fields.");
      return;
    }
    
    onAddContact(name, number);
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
