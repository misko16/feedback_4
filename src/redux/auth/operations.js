import { createAsyncThunk } from "@reduxjs/toolkit";
import { logOutRequest, loginRequire, refreshRequest, registerRequire, setToken } from "servises/ApiRequests";

export const loginThunk = createAsyncThunk(
    'auth/login',
    async( formData, thunkAPI) => {
        try{
            const response = await loginRequire(formData);
            return response;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const registerThunk = createAsyncThunk(
    'auth/register',
    async(formData, thunkAPI) => {
        try{
            const response = await registerRequire(formData);
            return response;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const refreshThunk = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.authReduser.token;
  
      if (token === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        setToken(token);
        const response = await refreshRequest();
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  
export const logOutThunk = createAsyncThunk(
    'auth/logOut',
    async( _, thunkAPI) => {
        try{
            await logOutRequest();
            return ;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);