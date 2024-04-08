import css from './Contact.module.css';

const Contact = ({ username, id, access, onDelete }) => {
    return (
    <>
      <p className={css.username}>{username}</p>
      <p className={css.id}>{id}</p>
      <p className={css.access}>{access}</p>
      <button className={css.button} onClick={() => onDelete(id)}>Delete</button>
    </>
    );
  };
  
  export default Contact; 
  