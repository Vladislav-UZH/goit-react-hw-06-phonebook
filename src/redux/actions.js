import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit/dist/createAction';
// const addContact = ({ name, number }) => {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// };
// const deleteContact = contactId => {
//   return { type: 'contacts/deleteContact', payload: contactId };
// };
// const editContact = contactId => {
//   return { type: 'contacts/editContact', payload: contactId };
// };
// const filterContacts = value => {
//   return { type: 'contacts/filterContacts', payload: value };
// };

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
