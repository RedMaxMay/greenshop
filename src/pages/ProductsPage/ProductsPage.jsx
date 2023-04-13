import React from "react";
import Container from "../../components/Container/Container";
import { useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem/ProductItem";
import s from "./style.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useParams } from "react-router-dom";

export default function ProductsPage() {
  const { title } = useParams();
  const { categories } = useSelector((state) => state.categories);

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
        <h1>All Products:</h1>

        <div className={s.wrap}>
          <Sidebar />

          <div className={s.products}>
            {products.map((prod) => (
              <ProductItem key={prod.id} {...prod} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
