import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {  createSlice } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async () => {
    try {
      const response = await axios.get("https://6539a46fe3b530c8d9e88f85.mockapi.io/contacts");
      console.log("Отримані дані з сервера:", response.data);
      return response.data;
    } catch (error) {
      throw Error("Failed to fetch contacts");
    }
  }
);


export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    try {
      const response = await axios.post("https://6539a46fe3b530c8d9e88f85.mockapi.io/contacts/", contact);
      return response.data;
    } catch (error) {
      throw Error("Failed to add contact");
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    try {
      await axios.delete(`https://6539a46fe3b530c8d9e88f85.mockapi.io/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      throw Error("Failed to delete contact");
    }
  }
);

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
