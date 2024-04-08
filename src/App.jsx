import { useState } from 'react';
import Filter from './components/SearchBox/SearchBox';
import Users  from './components/ContactList/ContactList';
import UserForm from "./components/ContactForm/ContactForm";

const initialUsers = [
  {username: 'Jacob', access: 'r', id: 23532453 },
  {username: 'Mango', access: 'w', id: 13341451 },
  {username: 'Elena', access: 'r', id: 53533455 },
  {username: 'Orlando', access: 'r', id: 67535456 },
  {username: 'Gimli', access: 'r', id: 99536457 },
]


export const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [nameFilter, setNameFilter] = useState('');

  const addUser = newUser => {
    setUsers(prevUsers => {
      return [...prevUsers, newUser];
    });
  };

  const deleteUser = userId => {
    setUsers(prvUsers => {
      return prvUsers.filter(user => user.id !== userId);
    });
  };

  const visibleUsers = users.filter(user =>
    user.username.toLowerCase().includes(nameFilter.toLowerCase())
    );

  return (
  <>
      <h1>PhoneBook</h1>
      <UserForm onAdd={addUser} />
      <Filter value={nameFilter} onChange={setNameFilter} />
      <Users items={visibleUsers} onDelete={deleteUser} />
    </>
    );
};

export default App;