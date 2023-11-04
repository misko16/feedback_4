import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = axios.create({
    baseURL:`https://6539a46fe3b530c8d9e88f85.mockapi.io`
});

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
async (_, thunkApi) => {
    try {
        const response = await  baseUrl.get(`/contacts`);
        console.log("Отримані дані з сервера:", response.data);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(`Failed to fetch contacts`);
    }}
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
async (contact, thunkApi) => {
    try {
        const response = await baseUrl.post(`/contacts/`, contact);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(`Failed to add contacts`);}}
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
async (contactId, thunkApi) => {
    try {
        await baseUrl.delete(`/contacts/${contactId}`);
        return contactId;
    } catch (error) {
        return thunkApi.rejectWithValue(`Failed to delete contacts`);}}
);
