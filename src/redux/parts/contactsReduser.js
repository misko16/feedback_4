const { createSlice } = require("@reduxjs/toolkit");

const contactsReduser = createSlice({
    name: 'contacts', 
    initialState:{
        data: [],
        filter:'',
    },
    reducer: {
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