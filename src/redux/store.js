// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
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
import phonebookReducer from './Phonebook/phonebook-reduser';

// const rootReducer = combineReducers({
//   phonebook: phonebookReducer,
// });
// const store = createStore(rootReducer, composeWithDevTools());

//хранилище с toolkit

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};
// const rootReducer = combineReducers({ phonebook: phonebookReducer });
// const persistedReducer = persistReducer(contactsPersistConfig, rootReducer);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, phonebookReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export const persistor = persistStore(store);
console.log(persistor);
