import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "@store/categoriesSlice/categoriesAction";

const initialState = {
  categories: [],
  activeCategories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setActiveCategories: (state, { payload }) => {
      if (state.activeCategories.includes(payload)) {
        state.activeCategories = state.activeCategories.filter(
          (item) => item !== payload
        );
      } else {
        state.activeCategories.push(payload);
      }
    },
    clearActiveCategories: (state) => {
      state.activeCategories = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state, action) => {})
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state) => {});
  },
});

export const { setActiveCategories, clearActiveCategories, unshiftCategory } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
