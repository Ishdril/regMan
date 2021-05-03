import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const instrumentsSlice = createSlice({
  name: "instruments",
  initialState,
  reducers: {
    setInstruments: (state, action) => {
      state.set(action.payload);
    },
  },
});

export default instrumentsSlice.reducers;
