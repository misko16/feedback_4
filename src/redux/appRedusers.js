import { createSlice, nanoid } from "@reduxjs/toolkit";

import { fetchRequest } from "servise/ApiRequired";

const appReducers = createSlice({
  name: 'appReducer',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null
    },
    filter: ""
  },
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      const existingContact = state.contacts.items.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      );
      if (existingContact) {
        alert(`${name} is already in contacts.`);
        return;
      }
      const id = nanoid();
      const updatedContacts = [...state.contacts.items, { name, number, id }];
      state.contacts = { ...state.contacts, items: updatedContacts };
    },
    
    deleteContact: (state, action) => {
      const contactId = action.payload;
      state.contacts.items = state.contacts.items.filter((contact) => contact.id !== contactId);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => builder
                    .addCase(fetchRequest.pending, (state) => {
          state.isLoading = true;
          state.error = null;})
                    .addCase(fetchRequest.fulfilled, (state,action) => {
          state.isLoading = false;
          state.contacts.items = action.payload}) 
                    .addCase(fetchRequest.rejected, (state,action) => {
          state.isLoading = false;
          state.error = action.payload;
                    })
  
});

export const { addContact, deleteContact, setFilter } = appReducers.actions;
export default appReducers.reducer;
