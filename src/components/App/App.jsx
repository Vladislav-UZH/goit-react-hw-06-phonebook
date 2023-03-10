import { useState } from 'react';

// Components
import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter';
import Notification from 'components/Notification';
import { BsPencilFill } from 'react-icons/bs';
// styles
import { AddContactsBtn } from '../Button/Button.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

//___APP___

export const App = () => {
  const contacts = useSelector(getContacts);
  const [isOpen, setIsOpen] = useState(false);

  const toggleContactBar = () => {
    setIsOpen(!isOpen);
  };

  // render
  return (
    <div
      style={{
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#DBD7D7',
      }}
    >
      <div
        style={{
          minWidth: 680,
          borderRadius: 10,
          padding: 30,
          backgroundColor: '#32343B',
        }}
      >
        <div></div>
        <h1>Phonebook</h1>
        {isOpen || !!contacts.length ? (
          <ContactsForm />
        ) : (
          <AddContactsBtn onClick={toggleContactBar}>
            Add your contacts
            <BsPencilFill size={40} />
          </AddContactsBtn>
        )}
        <div>
          <h2>Contacts</h2>
          <Filter />
        </div>
        {!contacts.length ? (
          <Notification message="No contacts with the entered name!" />
        ) : (
          <ContactsList />
        )}
      </div>
    </div>
  );
};
