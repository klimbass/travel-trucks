import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = ' https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';
const onlyTrueFilters = filters => {
  return Object.fromEntries(
    Object.entries(filters).filter(([key, value]) => value !== false)
  );
};

export const fetchTrucks = createAsyncThunk(
  'trucks/fetchAll',
  async (filters, thunkAPI) => {
    try {
      const trueFilters = onlyTrueFilters(filters);

      const response = await axios.get('/campers', {
        params: trueFilters,
      });
      return response.data.items;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
