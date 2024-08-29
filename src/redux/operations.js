import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = ' https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';
// /campers
export const fetchTrucks = createAsyncThunk(
  'trucks/fetchAll',
  async (_, thunkAPI) => {
    try {
      console.log(`starts fetch`);

      const response = await axios.get('/campers');
      console.log(`response fetch requests = ${response.data}`);

      return response.data.items;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
