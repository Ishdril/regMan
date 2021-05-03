import { configureStore } from '@reduxjs/toolkit';
import { configure } from '@testing-library/dom';

import instrumentsReducer from './instrumentsSlice';

export default configureStore({
  reducer: {
    instruments: instrumentsReducer
  }
});
