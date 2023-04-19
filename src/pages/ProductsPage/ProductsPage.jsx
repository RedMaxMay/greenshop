import React from "react";
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem/ProductItem";
import s from "./style.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import ProductsFilterBar from "../../components/ProductsFilterBar/ProductsFilterBar";
import { useEffect } from "react";
import { resetSearchFilter } from "../../redux/productSlice";

export default function ProductsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetSearchFilter());
  }, []);

  const { title } = useParams();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [title]);

  const products = useSelector(({ products }) => {
    if (title === undefined) {
      return products.products;
    } else if (title === "sale") {
      return products.products.filter(
        (product) => product.discont_price !== null
      );
    } else {
      const currentCategory = categories.find((cat) => cat.title === title);
      return products.products.filter(
        (prod) => prod.categoryId === currentCategory.id
      );
    }
  });

  return (
    <main>
      <Container>
        <h1>
          {title === undefined ? "ALL PRODUCTS" : title.toLocaleUpperCase()}
        </h1>

        <div className={s.wrap}>
          <Sidebar />

          <div className={s.products}>
            <ProductsFilterBar />
            {products
              .filter(({ selectShow, priceShow }) => selectShow && priceShow)
              .map((prod) => (
                <ProductItem key={prod.id} {...prod} />
              ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
