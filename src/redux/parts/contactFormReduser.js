import { createSlice } from '@reduxjs/toolkit';

const contactFormReduse = createSlice({
  name: 'contactForm',
  initialState: {
    name: '',
    number: '',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { setName, setNumber } = contactFormReduse.actions;
export default contactFormReduse.reducer;