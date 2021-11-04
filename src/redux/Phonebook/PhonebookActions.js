import { v4 as uuidv4 } from 'uuid';
import { SUBMIT, CHANGE_FILTER, DELETE } from './PhonebookType';
export const submit = data => ({
  type: SUBMIT,
  payload: { id: uuidv4(), name: data.name, number: data.number },
});
export const deleteContact = contactId => ({
  type: DELETE,
  payload: { contactId: contactId },
});
export const changeFilter = e => ({
  type: CHANGE_FILTER,
  payload: e.currentTarget.value,
});
