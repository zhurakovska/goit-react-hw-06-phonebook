import React from 'react';
import { FormData } from './Form/FormData';
import { Contacts } from './ContactLists/Contacts';
import { Filter } from './Filter/Filter';

import { Container, Title } from './Form/Form.styled';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <FormData />

      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Container>
  );
};
