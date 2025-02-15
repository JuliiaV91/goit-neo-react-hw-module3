import css from './Contact.module.css';
import { IoCall, IoPerson } from 'react-icons/io5';

function Contact({ name, number }) {
  return (
    <li className={css.contactCard}>
      <div className={css.contactInfo}>
        <p>
          <IoPerson /> {name}
        </p>
        <p>
          <IoCall /> {number}
        </p>
      </div>

      <button className={css.deleteBtn}>Delete</button>
    </li>
  );
}

export default Contact;
