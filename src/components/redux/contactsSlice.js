import { nanoid } from 'nanoid';
//імпорт функції для створення слайса
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts', // назва слайса для девтулза та внутрішніх речей

  //початковий стан слайса
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: {
      //в значення (contact) приходить пейлод з компонента - створений новий контакт
      prepare: contact => {
        // prepare це те що потрапляє перед тим як пряходять в редьюсер, бо редьюсер то чиста функція
        // Повертаємо новий доповнений payload
        return {
          // Розширюємо пейлоад будь-якими данними
          payload: { id: nanoid(), ...contact },
        };
      },
      reducer: (state, action) => {
        // Пушимо в массив новий пейлоад
        state.contacts.push(action.payload);
      },
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});
// Екпортуємо екшени, щоб вони працювали в компонентах при dispatch
export const { filterContacts, deleteContact, addContact } =
  contactsSlice.actions;
// Eкспортуємо редьюсер для того, щоб додати його в configureStore, котрий в store.js
export const contactsReducer = contactsSlice.reducer;
