import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    name: "",
    score: 0,
  },
  reducers: {
    // replace cart with what cart we fetched from db
    // updateForm(state, action){
    //     state.score=
    // },
    // replaceCart(state, action) {
    //   state.totalQuantity = action.payload.totalQuantity;
    //   state.items = action.payload.items;
    // },
    // addItemToCart(state, action) {
    //   const newItem = action.payload;
    //   const existingItem = state.items.find((item) => item.id === newItem.id);
    //   state.totalQuantity++;
    //   state.changed = true;
    //   if (!existingItem) {
    //     state.items.push({
    //       id: newItem.id,
    //       price: newItem.price,
    //       quantity: 1,
    //       totalPrice: newItem.price,
    //       name: newItem.title,
    //     });
    //   } else {
    //     existingItem.quantity++;
    //     existingItem.totalPrice = existingItem.totalPrice + newItem.price;
    //   }
    // },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
