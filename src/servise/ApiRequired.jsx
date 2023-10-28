import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const ApiUrl = 'https://6539a46fe3b530c8d9e88f85.mockapi.io/contacts';

export const fetchRequest = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await axios.get(`${ApiUrl}/contacts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
});
