import { createSelector } from "@reduxjs/toolkit";

const selectProductsState = (state) => state.products;

const filteredProducts = createSelector(
  selectProductsState,
  (productsSLice) => {
    const { products, searchInput } = productsSLice;
    if (!searchInput) return products;
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
);

export { filteredProducts };
