import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactFormReduser } from "./parts/contactFormReducer";

const { combineReducers, createStore } = require("redux");

const rootReducer = combineReducers({
    name: contactFormReduser,
    number: contactFormReduser,
})

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);