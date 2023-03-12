import { configureStore } from "@reduxjs/toolkit";
import { cartReducers } from "./cartSlice";

export const store = configureStore({
  reducer: { cartSate: cartReducers },
});
