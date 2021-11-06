import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './phonebook-actions';
import initialContacts from '../../contacts.json';
// import { SUBMIT, DELETE, CHANGE_FILTER } from './phonebook-types';

// const contacts = (state = initialContacts, { type, payload }) => {
//   switch (type) {
//     case SUBMIT:
//       console.log(type, payload);
//       return state.some(
//         el => el.name.toLowerCase() === payload.name.toLowerCase(),
//       )
//         ? alert(`${payload.name} is already in the directory.`)
//         : [...state, payload];

//     case DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };
// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
//reduxjs/Toolkit

const contactsState =
  JSON.parse(localStorage.getItem('contacts')) ?? initialContacts;

const contacts = createReducer(contactsState, {
  [actions.addContact]: (state, { payload }) =>
    state.some(({ name }) => name.toLowerCase() === payload.name.toLowerCase())
      ? alert(`${payload.name} is already in the directory.`)
      : [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const phonebookReducer = combineReducers({ contacts, filter });
export default phonebookReducer;
