import { configureStore } from "@reduxjs/toolkit";
import contactFormReduser from "./parts/contactFormReduser";

 const store = configureStore({
    reducer:{
        contactForm: contactFormReduser,
    },
 })

 export default store;