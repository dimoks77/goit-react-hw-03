import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ items, onDelete }) => {
    return (
      <ul className={css.list}>
        {items.map(contact => (
            <li key={contact.id} className={css.listItem}>
              <Contact contact={contact} onDelete={onDelete} />
        </li>
        ))}
      </ul>
    );
  };
  
  export default ContactList; 
  