import { createSlice } from "@reduxjs/toolkit";
import { getBag } from "@store/bagSlice/bagActions";

const initialState = {
  bag: [],
};

const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBag.pending, (state) => {})
      .addCase(getBag.fulfilled, (state, action) => {
        state.bag = action.payload;
      })
      .addCase(getBag.rejected, (state) => {
        alert("oshibka");
      });
  },
});

export default bagSlice.reducer;