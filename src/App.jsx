import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import { useEffect } from "react";
import categoriesAsyncAction from "./asyncAction/categories";
import productsAsyncAction from "./asyncAction/products";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "./redux/categorySlice";
import { loadProducts } from "./redux/productSlice";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import BasketPage from "./pages/BasketPage/BasketPage";

function App() {
  const dispatch = useDispatch();

  const { basket } = useSelector((state) => state.basket);

  useEffect(() => {
    categoriesAsyncAction
      .getAllCategories()
      .then(({ data }) => dispatch(loadCategories(data)))
      .catch((error) => console.log(error));

    productsAsyncAction
      .getAllProducts()
      .then(({ data }) => dispatch(loadProducts(data)))
      .catch((error) => console.log(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("GreenShop", JSON.stringify(basket));
  }, [basket]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/greenshop" element={<MainPage />} />
        <Route path="/products/all" element={<ProductsPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/products/:title" element={<ProductsPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
