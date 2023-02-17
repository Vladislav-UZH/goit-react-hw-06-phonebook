import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './actions';

const contactsInitialState = [];
const filterInitialState = '';

const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filterReducer = createReducer(filterInitialState, {
  [filterContacts]: (state, action) => state.filter(),
});
export { contactsReducer, filterReducer };
