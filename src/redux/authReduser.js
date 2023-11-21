import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
    //----------REFRESH------------------
    .addCase(refreshThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
    })
        .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
    })
        .addCase(refreshThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        })
        //----------LogOut------------------
        .addCase(logOutThunk.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
            .addCase(logOutThunk.fulfilled, () => {
                return INITIAL_STATE;
        })
            .addCase(logOutThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
});

export const authRedusers = authSlise.reducer;