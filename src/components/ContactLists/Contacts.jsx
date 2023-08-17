import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import {
  ContactList,
  ContactItem,
  DeleteButton,
} from 'components/Form/Form.styled';
import { useSelector } from 'react-redux';

export const Contacts = () => {
  //Використовуємо useSelector щоб отримати  дані з редакса
  const contacts = useSelector(state => state.contactList.contacts);
  const filter = useSelector(state => state.contactList.filter);
  //використовуємо  Діспатч щоб отримати функцию керування редаксом
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const getfilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = getfilteredContacts();
  return (
    <ContactList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name} {number}
          <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
        </ContactItem>
      ))}
    </ContactList>
  );
};
