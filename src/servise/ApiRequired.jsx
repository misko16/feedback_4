import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const ApiUrl = `https://6539a46fe3b530c8d9e88f85.mockapi.io/contacts/contacts`;

axios.defaults.baseURL(ApiUrl);

export const fetchRequest = createAsyncThunk('contacts/fetchAll', async(state, action) => {
    const response = await axios.get('/contacts');
    return response.data;
});

