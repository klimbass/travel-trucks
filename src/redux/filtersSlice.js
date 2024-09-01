import { createSlice } from '@reduxjs/toolkit';
// import { statusFilters } from './constants';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    // status: statusFilters.all,
    status: [],
    // status: '',
  },
  reducers: {
    setStatusFilter(state, action) {
      const newFilter = action.payload;

      const index = state.status.findIndex(
        item => Object.keys(item)[0] === Object.keys(newFilter)[0]
      );
      if (index >= 0) {
        state.status[index] = newFilter;
      } else {
        state.status = [...state.status, newFilter];
      }
    },
    delStatusFilter(state, action) {
      const keyFilterToRemove = Object.keys(action.payload)[0];
      const status = state.status.filter(
        filter => Object.keys(filter)[0] !== keyFilterToRemove
      );
      state.status = [...status];
    },
  },
});

export const { setStatusFilter, delStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
