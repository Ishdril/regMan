import { configureStore } from '@reduxjs/toolkit';

import instrumentsReducer from './instrumentsSlice';


export default configureStore({
  reducer: {
    instruments: instrumentsReducer
  },
  middleware: [],
});
