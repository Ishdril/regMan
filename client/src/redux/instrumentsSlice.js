import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const instrumentsSlice = createSlice({
  name: "instruments",
  initialState: initialState,
  reducers: {
    setInstruments: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

// export const { setInstruments } = instrumentsSlice.actions;
// export const selectInstruments = (state) => state.instruments;
export default instrumentsSlice.reducer;
