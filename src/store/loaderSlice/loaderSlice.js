// loaderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    incrementLoading: (state) => {
      state.isLoading = true;
    },
    decrementLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { incrementLoading, decrementLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
