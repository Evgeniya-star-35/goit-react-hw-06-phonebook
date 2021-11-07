import { v4 as uuidv4 } from 'uuid';
// import { DELETE, SUBMIT, CHANGE_FILTER } from './phonebook-types';

// export const addContact = (name, number) => ({
//   type: SUBMIT,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// export const deleteContact = contactId => ({
//   type: DELETE,
//   payload: contactId,
// });

// export const changeFilter = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });

//reduxjs/toolkit
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/Add', ({ name, number }) => ({
  payload: {
    name,
    number,
    id: uuidv4(),
  },
}));

const deleteContact = createAction('contacts/Delete');

const changeFilter = createAction('contacts/changeFilter');

const actions = { addContact, deleteContact, changeFilter };

export default actions;
