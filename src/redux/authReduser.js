import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginRequire, registerRequire } from "servises/ApiRequests";



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


const INITIAL_STATE = {
    token: null,
    user: {
        email: null,
        name: null,
    },
    authenticated: false,
    isLoading: false,
    error: null,
};

    const authSlise = createSlice({
    name:'authReduser',
    initialState: INITIAL_STATE,
    extraReducers: builder => 
    builder  
    //-------------REGISTER USER -------------
        .addCase(registerThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
    })
        .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
    })
        .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
      // ---------- LOGIN USER ----------------
        .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
    })
        .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
    })
        .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
});

export const authReduser = authSlise.reducer;