import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.card}>
      <div className={css.wrapper}>
        <p className={css.field}>
          <FaUser /> {contact.name}
        </p>
        <p className={css.field}>
          <FaPhone /> {contact.number}
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
