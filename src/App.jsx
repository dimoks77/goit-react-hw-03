import { useState } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList  from './components/ContactList/ContactList';
import ContactForm from "./components/ContactForm/ContactForm";

const initialContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]


export const App = () => {
  const [contact, setContact] = useState(initialContacts);
  const [nameFilter, setNameFilter] = useState('');

  const addContact = newContact => {
    setContact(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactId => {
    setContact(prvContacts => {
      return prvContacts.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContacts = contact.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );

  return (
  <>
      <h1>PhoneBook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={nameFilter} onChange={setNameFilter} />
      <ContactList items={visibleContacts} onDelete={deleteContact} />
    </>
    );
};

export default App;