import css from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
    return (
    <div className={css.card}>
      <p className={css.name}>{contact.name}</p>
      <p className={css.phone}>{contact.number}</p>
      <button className={css.button} onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
    );
  };
  
  export default Contact; 
  