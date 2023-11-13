import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appRedusers from "../redux/appRedusers";


const rootReducer = combineReducers({
  appReduser: appRedusers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// import { combineReducers, configureStore } from '@reduxjs/toolkit';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import { postDetailsReducer } from './postDetailReducer';
// import { postsReducer } from './postsReducer';
// import { productsReducer } from './productReducer';
// import { authReducer } from './authReducer';
// import appRedusers from './appRedusers';
// import { authReduser } from './authReduser';

// const authConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// export const rootReducer = combineReducers({
//   app
//   postDetails: postDetailsReducer,
//   postsData: postsReducer,
//   productsStore: productsReducer,
//   auth: persistReducer(authConfig, authReducer),
// });

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);