import Contact from '../Contact/Contact';

function ContactList({ contacts, onDelete }) {
  return (
    <div>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
export default ContactList;
