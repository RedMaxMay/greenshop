import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import ButtonLight from "../ButtonLight/ButtonLight";

import img1 from "./1.jpeg";
import img2 from "./2.jpeg";
import img3 from "./3.jpeg";
import img4 from "./4.jpeg";

export default function MainCategories() {
  return (
    <section className={s.main_categories_wrap}>
      <div className={s.info}>
        <h2>Top Categories</h2>
        <Link to="/categories">
          <ButtonLight text="All categories" />
        </Link>
      </div>

      <div className={s.categories}>
        <div className={s.category}>
          <div className={s.img_wrap}>
            <img src={img1} alt="" />
          </div>
          <div className={s.title}>
            <p>Category name</p>
          </div>
        </div>
        <div className={s.category}>
          <div className={s.img_wrap}>
            <img src={img2} alt="" />
          </div>
          <p>Category name</p>
        </div>
        <div className={s.category}>
          <div className={s.img_wrap}>
            <img src={img3} alt="" />
          </div>
          <p>Category name</p>
        </div>
        <div className={s.category}>
          <div className={s.img_wrap}>
            <img src={img4} alt="" />
          </div>
          <p>Category name</p>
        </div>
      </div>
    </section>
  );
}
