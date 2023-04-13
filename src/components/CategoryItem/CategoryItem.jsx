import React from "react";
import s from "./style.module.css";
import URL from "../../asyncAction/url";
import { Link } from "react-router-dom";

export default function CategoryItem({ title, image, id }) {
  return (
    <div className={s.category}>
      <Link to={`/products/${title}`}>
        <div className={s.img_wrap}>
          <img src={`${URL}/${image}`} alt={title} />
        </div>
        <div className={s.title}>
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
}
