
function ContactItem(props) {
    const { name, number } = props.contact;
  
    const handleDelete = () => {
      props.onDeleteContact(props.contact.id);
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