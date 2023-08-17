import React from 'react';
import { FilterInput } from 'components/Form/Form.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'components/redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <FilterInput
        type="text"
        placeholder="Write contact"
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </div>
  );
};
