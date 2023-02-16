const contactsInitialState = [];
const filterInitialState = '';

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];
    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);
    // case 'contacts/editContact':
    //   return;
    default:
      return state;
  }
};
const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'contacts/filterContacts':
      return state.filter();
    default:
      return state;
  }
};
export { contactsReducer, filterReducer };
