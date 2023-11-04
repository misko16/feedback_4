import {  createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "servises/requestFunctions";

const appReducers = createSlice({
  name: "appReducer",
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: "",
  },

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      });
  },
});

export const { setFilter } = appReducers.actions;
export default appReducers.reducer;
