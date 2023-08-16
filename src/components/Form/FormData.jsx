import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Label, Input, Button } from './Form.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export const FormData = ({ onAddContact }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const { name, number } = formData;

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact({
      // тут мы получаем наш contact деструтуризируем
      // тут мы передаем значения name и number(которое записали в инпуте) при сабмите мы прокидываем это в contact
      name,
      number,
    });

    setFormData(INITIAL_STATE);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            onChange={handleInputChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number:
          <Input
            onChange={handleInputChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button>Add contact</Button>
      </Form>
    </>
  );
};

FormData.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
