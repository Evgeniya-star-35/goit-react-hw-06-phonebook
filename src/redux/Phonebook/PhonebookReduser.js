import { combineReducers } from 'redux';
import { SUBMIT, CHANGE_FILTER, DELETE } from './PhonebookType';
import { createReducer } from '@reduxjs/toolkit';
// import { submit, deleteContact, changeFilter } from './PhonebookActions';
import initialContacts from '../../contacts.json';

const phonebookState = {
  contacts: {
    items: [],
    filter: '',
  },
};
const contactReducer = (state = [...initialContacts], { type, payload }) => {
  switch (type) {
    case SUBMIT: {
      let comparableElement = state.some(
        element => element.name.toLowerCase() === payload.toLowerCase(),
      );
      if (comparableElement) {
        return [...state, payload];
      } else {
        alert('Contact is already in the directory!');
        return state;
      }
    }
    case DELETE: {
      let newArrAfterDel = state.filter(elem => elem.id !== payload);
      return [...newArrAfterDel];
    }
    default:
      return state;
  }
};
const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};
const phonebookReducer = combineReducers({
  contact: contactReducer,
  filter: filterReducer,
});
export default phonebookReducer;
