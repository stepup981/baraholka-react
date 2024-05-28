import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  incrementLoading,
  decrementLoading,
} from "@store/loaderSlice/loaderSlice";
import api from "@api/api";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, { dispatch }) => {
    dispatch(incrementLoading());
    const response = await api.getCategories();
    dispatch(decrementLoading());
    return response;
  }
);
