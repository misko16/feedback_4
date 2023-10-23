import { createSlice } from "@reduxjs/toolkit";

const contactFormReducers = createSlice({
    name: 'contactForm',
    initialState: {
        name: [],
        number:[],
    },
    reducers:{
        addContact: (state, action) => {
            const { name, number } = action.payload;
            state.name.push(name);
            state.number.push(number);
        },
        clearContact: (state) => {
            state.name = [];
            state.number = [];
        }
    },
});

export const { addContact, clearContact } = contactFormReducers.actions;
export default contactFormReducers.reducer;
