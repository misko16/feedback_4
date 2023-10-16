import { createSlice } from "@reduxjs/toolkit";

const contactsReduser = createSlice({
    name: 'contacts', 
    initialState:{
        data: [],
        filter:'',
    },
    reducers: {
        setContacts: (state, action) => {
            state.data = action.payload;
        },
        addForm: (state, action) => {
            state.data.push(action.payload);
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const {setContacts, setFilter, addForm} = contactsReduser.actions;
export default contactsReduser.reducer;