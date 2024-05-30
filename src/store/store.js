import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "@store/categoriesSlice/categoriesSlice";
import productsSlice from "@store/productsSlice/productsSlice";
import loaderSlice from "@store/loaderSlice/loaderSlice";
import bagSlice from "@store/bagSlice/bagSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    loader: loaderSlice,
    bag: bagSlice
  },
});
