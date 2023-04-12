import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
  },
  reducers: {
    loadCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export default categorySlice.reducer;
export const { loadCategories } = categorySlice.actions;
