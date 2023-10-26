import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appRedusers from "../redux/appRedusers";

const rootReducer = combineReducers({
  appReduser: appRedusers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
