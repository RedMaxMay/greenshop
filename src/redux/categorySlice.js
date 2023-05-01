import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import URL from "../asyncAction/url";
import axios from "axios";

const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    return await axios(axios.get(`${URL}/categories/all`));
  }
);

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
