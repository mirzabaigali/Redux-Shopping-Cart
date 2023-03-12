import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    total: 0,
    cartList: [],
  },
  reducers: {
    add(state, action) {
      const updatedCart = state.cartList.concat(action.payload);
      const total = state.total + action.payload.price;
      return { ...state, total: total, cartList: updatedCart };
    },
    remove(state, action) {
      const updatedCart = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
      console.log(updatedCart);
      const total = state.total - action.payload.price;
      return { ...state, total: total, cartList: updatedCart };
    },
  },
});

export const { add, remove } = cartSlice.actions;
export const cartReducers = cartSlice.reducer;
