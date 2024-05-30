import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsActions";

const initialState = {
  products: [],
  searchInput: ''
};

const productsSlise = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchInput(state, action) {
      state.searchInput = action.payload;
    },
  },
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

export const { setSearchInput } = productsSlise.actions;
export default productsSlise.reducer;
