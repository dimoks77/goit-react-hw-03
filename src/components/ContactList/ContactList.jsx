import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ items, onDelete }) => {
    return (
      <ul className={css.list}>
        {items.map(item => (
            <li key={item.id} className={css.listItem} >
              <Contact 
                  username={item.username} 
                  id={item.id} 
                  access={item.access} 
                  onDelete={onDelete} 
              />
        </li>
        ))}
      </ul>
    );
  };
  
  export default ContactList; 
  