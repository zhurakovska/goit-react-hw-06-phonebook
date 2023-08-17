// імпортуємо функцію створення стору
import { configureStore } from '@reduxjs/toolkit';
//імпортуємо редьюсери
import { contactsReducer } from './contactsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['filterValue'],
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

//Ми створюємо стор та експортуємо його для використання в index.js
export const store = configureStore({
  //додаємо редьюсер
  reducer: {
    contactList: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production', // відключити devTools
});

export const persistor = persistStore(store);
