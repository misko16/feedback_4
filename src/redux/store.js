import { combineReducers, configureStore } from "@reduxjs/toolkit";
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

import appRedusers from "./appRedusers";
import { authRedusers } from "./authReduser";
import { contactsReducer } from "./contactsReduser";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};
const rootReducer = combineReducers({
  appReduser: appRedusers,
  contactsStore: contactsReducer,
  authReduser: persistReducer(persistConfig, authRedusers),
});
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

store.subscribe(() => {
  console.log('Updated State:', store.getState());
});
console.log('Initial State:', store.getState());

export const persistor = persistStore(store);
export default store;
