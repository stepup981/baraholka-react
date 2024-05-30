import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  incrementLoading,
  decrementLoading,
} from "@store/loaderSlice/loaderSlice";
import api from "@api/api";

const getBag = createAsyncThunk("bag/getBag", async (_, { dispatch }) => {
  dispatch(incrementLoading());
  const response = await api.getBag();
  dispatch(decrementLoading());
  return response;
});

const addProductOnBag = createAsyncThunk("bag/addProductOnBag", (product) => {
  const response = api.addProductOnBag(product);
  return response;
})

const removeProductOnBag = createAsyncThunk("bag/removeProductOnBag", (productId) => {
  const response = api.removeProductOnBag(productId);
  return response;
});

export { getBag, addProductOnBag, removeProductOnBag };
