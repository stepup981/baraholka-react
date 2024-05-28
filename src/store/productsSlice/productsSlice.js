import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsActions";

const initialState = {
  products: [],
};

const productsSlise = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {})
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        alert("Ошибка");
      });
  },
});

export default productsSlise.reducer;
