import { createSlice } from '@reduxjs/toolkit';
import { fetchTrucks } from './operations.js';

const trucksSlice = createSlice({
  name: 'trucks',
  initialState: {
    items: [],
    allItems: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTrucks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;

        if (state.allItems.length === 0) {
          state.allItems = action.payload;
        }
      })
      .addCase(fetchTrucks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const trucksReducer = trucksSlice.reducer;
