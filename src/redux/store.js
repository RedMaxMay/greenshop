import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categorySlice";
import productsReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
  },
});
