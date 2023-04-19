import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    loadProducts: (state, action) => {
      state.products = action.payload.map((prod) => ({
        ...prod,
        selectShow: true,
        priceShow: true,
      }));
    },
    searchProducts: (state, action) => {
      state.products = state.products.map((prod) => ({
        ...prod,
        selectShow: prod.title
          .toLowerCase()
          .includes(action.payload.toLowerCase()),
      }));
    },
    resetSearchFilter: (state, action) => {
      state.products = state.products.map((prod) => ({
        ...prod,
        selectShow: true,
        priceShow: true,
      }));
    },
    sortFilter: (state, action) => {
      if (action.payload === "1") {
        state.products.sort((a, b) => a.id - b.id);
      } else if (action.payload === "2") {
        state.products.sort(
          (a, b) => (a.discont_price || a.price) - (b.discont_price || b.price)
        );
      } else if (action.payload === "3") {
        state.products.sort(
          (a, b) => (b.discont_price || b.price) - (a.discont_price || a.price)
        );
      }
    },
    priceFilter: (state, action) => {
      const { priceFrom, priceTo } = action.payload;
      if (priceFrom || priceTo) {
        state.products = state.products.map((prod) => ({
          ...prod,
          priceShow:
            (prod.discont_price || prod.price) >= priceFrom &&
            (prod.discont_price || prod.price) <= priceTo,
        }));
      } else
        state.products = state.products.map((prod) => ({
          ...prod,
          selectShow: true,
          priceShow: true,
        }));
    },
  },
});

export default productSlice.reducer;
export const {
  loadProducts,
  searchProducts,
  resetSearchFilter,
  sortFilter,
  priceFilter,
} = productSlice.actions;
