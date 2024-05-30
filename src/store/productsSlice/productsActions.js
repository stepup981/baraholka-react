import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  incrementLoading,
  decrementLoading,
} from "@store/loaderSlice/loaderSlice";
import api from "@api/api";

 const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { dispatch }) => {
    dispatch(incrementLoading());
    const response = await api.getProducts();
    dispatch(decrementLoading());
    return response;
  }
);

const rebaseStatusOnBag = createAsyncThunk("products/rebaseStatusOnBag", (status) => {
  const response = api.rebaseStatusOnBag(status)
  return response
})

export {getProducts, rebaseStatusOnBag}
