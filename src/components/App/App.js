// import { connect } from 'react-redux';
import Container from '../Container';
import Form from '../Form';
import Filter from '../Filter';
import ContactList from '../ContactsList';
// import actions from '../../redux/Phonebook/phonebook-actions';
import s from './App.module.css';

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(
  //     window.localStorage.getItem('contacts') ?? initialContacts,
  //   );
  // });
  // const [filter, setFilter] = useState('');

  // const formSubmitHandler = data => {
  //   const comparableElement = contacts.some(
  //     element => element.name.toLowerCase() === data.name.toLowerCase(),
  //   );
  //   if (comparableElement) {
  //     return alert('contact is already in the directory');
  //   }
  // };

  // const changeFilter = e => {
  //   setFilter(e.target.value);
  // };

  // const getVisibleContact = () => {
  //   const contactFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(contactFilter),
  //   );
  // };

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <Form />
      <Filter />
      <h2 className={s.contactTitle}>Contacts</h2>
      <ContactList />
    </Container>
  );
}
// const mapStateToProps = state => {
//   return {
//     contacts: state,
//   };
// };
// const mapDispatchToProps = dispatch => ({
//   addNote: text => dispatch(actions.addContact(text)),
// });
export default App;
