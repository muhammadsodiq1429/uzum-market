import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../types";

interface IWishlist {
  value: IProduct[];
}

const initialState: IWishlist = {
  value: JSON.parse(localStorage.getItem("wishlist") || "[]") || [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (
      { value: products },
      { payload: product }: PayloadAction<IProduct>
    ) => {
      const index = products.findIndex((item) => item.id === product.id);
      if (index < 0) {
        products.push({ ...product, isLiked: true });
      } else {
        products = products.splice(index, 1);
      }
      localStorage.setItem("wishlist", JSON.stringify(products));
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
