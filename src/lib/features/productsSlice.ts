import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../static";

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    value: products,
  },
  reducers: {},
});

export default productsSlice.reducer;
