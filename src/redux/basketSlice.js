import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      console.log("add to basket");
    },
  },
});

export const { addToBasket } = basketSlice.actions;
