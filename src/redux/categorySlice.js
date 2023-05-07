import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
  },
  reducers: {
    loadCategories: (state, action) => {
      state.loading = true;
      state.categories = [...action.payload];
      state.loading = false;
    },
  },
});

export default categorySlice.reducer;
export const { loadCategories } = categorySlice.actions;
