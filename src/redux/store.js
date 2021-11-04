import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phonebookReducer from './Phonebook/PhonebookReduser';

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
