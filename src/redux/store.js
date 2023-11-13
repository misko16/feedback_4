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

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token'],
};

const rootReducer = combineReducers({
    appReduser: appRedusers,
    authReduser: persistReducer(persistConfig,authRedusers),
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  

export const persistor = persistStore(store);
export default store;
