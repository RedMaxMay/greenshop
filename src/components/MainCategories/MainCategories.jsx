import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import ButtonLight from "../ButtonLight/ButtonLight";
import { useSelector } from "react-redux";
import CategoryItem from "../CategoryItem/CategoryItem";
import CategoryItemSkeleton from "../CategoryItemSkeleton/CategoryItemSkeleton";

export default function MainCategories() {
  const { categories, loading } = useSelector((state) => state.categories);

  return (
    <section className={s.main_categories_wrap}>
      <div className={s.info}>
        <h2>Top Categories</h2>
        <Link to="/categories">
          <ButtonLight text="All categories" />
        </Link>
      </div>

      <div className={s.categories}>
        {loading
          ? [1, 2, 3, 4].map((n) => <CategoryItemSkeleton key={n} />)
          : categories.map((category, index) => {
              return index <= 3 ? (
                <CategoryItem key={category.title} {...category} />
              ) : (
                ""
              );
            })}
      </div>
    </section>
  );
}
