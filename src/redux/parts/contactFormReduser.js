import { createSlice } from '@reduxjs/toolkit';

const contactFormReduse = createSlice({
  name: 'contactForm',
  initialState: {
    name: '',
    number: '',
  },
  reducers: {
    resetForm: (state) => {
      state.name = '';
      state.number =  '';
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { setName, setNumber, resetForm} = contactFormReduse.actions;
export default contactFormReduse.reducer;