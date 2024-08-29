import { configureStore } from "@reduxjs/toolkit";
// import { filtersReducer } from "./filtersSlice";
import { trucksReducer } from "./trucksSlice.js";

export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
    // filters: filtersReducer,
  },
});