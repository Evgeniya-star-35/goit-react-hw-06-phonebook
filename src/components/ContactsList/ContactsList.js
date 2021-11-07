// import PropTypes from 'prop-types';
// import { useEffect } from 'react';

import Contact from '../Contact';
import { useSelector, useDispatch } from 'react-redux';
import { getFiltredContacts } from '../../redux/Phonebook/phonebook-selectors';
import actions from '../../redux/Phonebook/phonebook-actions';
import s from './ContactsList.module.css';

export default function ContactsList() {
  const contacts = useSelector(getFiltredContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li className={s.item} key={id}>
          <Contact name={name} number={number} />
          <button
            className={s.button}
            type="button"
            onClick={() => dispatch(actions.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
