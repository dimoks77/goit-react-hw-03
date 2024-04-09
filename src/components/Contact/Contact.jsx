import css from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.card}>
      <div className={css.wrapper}>
        <p className={css.name}>{contact.name}</p>
        <p className={css.phone}>{contact.number}</p>
      </div>
      <button className={css.button} onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;

  