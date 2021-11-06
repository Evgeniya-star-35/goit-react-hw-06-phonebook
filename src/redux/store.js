//хранилище до toolkit
import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './Phonebook/phonebook-reduser';
const store = configureStore({
  reducer: { phonebook: phonebookReducer },
});
// console.log(store.getState());
export default store;
