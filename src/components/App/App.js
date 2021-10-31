import { useState, useEffect } from 'react';
import Container from '../Container';
import Form from '../Form';
import Filter from '../Filter';
import ContactList from '../ContactsList';
import initialContacts from '../../contacts.json';
import s from './App.module.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? initialContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    const comparableElement = contacts.some(
      element => element.name.toLowerCase() === data.name.toLowerCase(),
    );
    if (comparableElement) {
      return alert('contact is already in the directory');
    }

    setContacts([...contacts, data]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContact = () => {
    const contactFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <Filter value={filter} onChange={changeFilter} />
      <h2 className={s.contactTitle}>Contacts</h2>
      <ContactList
        contacts={getVisibleContact()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
}

export default App;
