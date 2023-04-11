import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import SalesPage from "./pages/SalesPage/SalesPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/greenshop" element={<MainPage />} />
        <Route path="/products/all" element={<AllProductsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/products/sale" element={<SalesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
