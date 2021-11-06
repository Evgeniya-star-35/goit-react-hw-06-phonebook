export const getContacts = state => state.phonebook.contacts;
export const getFilter = state => state.phonebook.filter;
export const getFiltredContacts = state => {
  const lowerCasedFilter = getFilter(state).toLowerCase();
  const filteredContacts = getContacts(state).filter(({ name }) =>
    name.toLowerCase().includes(lowerCasedFilter),
  );
  return filteredContacts;
};
