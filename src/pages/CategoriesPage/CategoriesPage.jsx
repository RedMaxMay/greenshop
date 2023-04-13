import React from "react";
import Container from "../../components/Container/Container";
import { useSelector } from "react-redux";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import s from "./style.module.css";

export default function CategoriesPage() {
  const { categories } = useSelector((state) => state.categories);
  console.log(categories);
  return (
    <main>
      <Container>
        <h1 className={s.heading}>All Categories</h1>
        <div className={s.categories}>
          {categories.map((category) => (
            <CategoryItem key={category.title} {...category} />
          ))}
        </div>
      </Container>
    </main>
  );
}
