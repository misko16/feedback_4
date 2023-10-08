import { configureStore } from "@reduxjs/toolkit";
import contactFormReduser from "./parts/contactFormReduser";
import contactsReduser from "./parts/contactsReduser";

 const store = configureStore({
    reducer:{
        contactForm: contactFormReduser,
        contacts: contactsReduser,
    },
 })

 export default store;