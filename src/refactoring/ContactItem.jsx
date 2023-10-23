
  const ContactItem = ({contact, onDeleteContact}) => {
    const {name, number} = contact;
    const handleDelete = () => {
      onDeleteContact(contact.id);
    };
  
    return (
      <li>
        {name}: {number}
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </li>
    );
  }

  export default ContactItem;