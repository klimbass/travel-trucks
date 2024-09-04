import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    status: {},
  },
  reducers: {
    setLocationFilter(state, action) {
      const newLocation = action.payload;
      state.status = { ...state.status, location: newLocation };
    },
    setNameFilter(state, action) {
      state.status = { ...state.status, ...action.payload };
    },
    delAllFilters(state, action) {
      state.status = {};
    },
    toggleFilter(state, action) {
      const filterName = action.payload;
      const { [action.payload]: currentFilterState } = state.status;
      state.status = {
        ...state.status,
        [filterName]:
          currentFilterState === undefined ? true : !currentFilterState,
      };
    },
  },
});

export const { delAllFilters, toggleFilter, setLocationFilter, setNameFilter } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
