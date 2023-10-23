import { createSlice, nanoid } from "@reduxjs/toolkit";


const appReducers = createSlice({
  name: 'appReducer',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      const existingContact = state.contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      );
      if (existingContact) {
        alert(`${name} is already in contacts.`);
        return;
      }
      const id = nanoid();
      state.contacts.push({ name, number, id });
    },
    deleteContact: (state, action) => {
      const contactId = action.payload;
      state.contacts = state.contacts.filter((contact) => contact.id !== contactId);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = appReducers.actions;
export default appReducers.reducer;
