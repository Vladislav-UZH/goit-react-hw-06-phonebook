import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/addContact', (name, number) => {
  return {
    payload: {
      id: nanoid,
      name,
      number,
    },
  };
});
const deleteContact = createAction('contacts/deleteContact');
const filterContacts = createAction('contacts/filterContacts');

export { addContact, deleteContact, filterContacts };
