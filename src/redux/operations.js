import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = ' https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

const filtersToObject = filters => {
  return filters.reduce((acc, filter) => {
    const key = Object.keys(filter)[0];
    const value = filter[key];
    acc[key] = value;
    return acc;
  }, {});
};
const onlyTrueFilters = filters => {
  return Object.fromEntries(
    Object.entries(filters).filter(([key, value]) => value !== false)
  );
};

export const fetchTrucks = createAsyncThunk(
  'trucks/fetchAll',
  async (filters, thunkAPI) => {
    try {
      console.log(filters);

      const trueFilters = onlyTrueFilters(filters);
      console.log(trueFilters);

      const response = await axios.get('/campers', {
        params: trueFilters,
      });
      console.log(response.config.url);
      return response.data.items;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
