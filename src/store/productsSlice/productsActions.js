import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  incrementLoading,
  decrementLoading,
} from "@store/loaderSlice/loaderSlice";
import api from "@api/api";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { dispatch }) => {
    dispatch(incrementLoading());
    const response = await api.getProducts();
    dispatch(decrementLoading());
    return response;
  }
);
