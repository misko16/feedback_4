import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async () => {
    try {
      const response = await axios.get("https://6539a46fe3b530c8d9e88f85.mockapi.io/api/contact/contacts");
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
      const response = await axios.post("https://6539a46fe3b530c8d9e88f85.mockapi.io/api/contact/contacts/", contact);
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
      await axios.delete(`https://6539a46fe3b530c8d9e88f85.mockapi.io/api/contact/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      throw Error("Failed to delete contact");
    }
  }
);
