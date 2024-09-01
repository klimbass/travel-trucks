import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filtersSlice.js';
import { trucksReducer } from './trucksSlice.js';

export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
    filters: filtersReducer,
  },
});
