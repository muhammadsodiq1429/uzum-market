import { configureStore } from "@reduxjs/toolkit";
import wishlist from "./features/wishlistSlice";
import products from "./features/productsSlice";

export const store = configureStore({
  reducer: {
    wishlist,
    products,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type ApiDispatch = typeof store.dispatch;
