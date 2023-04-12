import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import ButtonLight from "../ButtonLight/ButtonLight";

export default function MainSale() {
  return (
    <section className={s.main_sale_wrap}>
      <div className={s.info}>
        <h2>Sales</h2>
        <Link to="/products/sale">
          <ButtonLight text="All sale" />
        </Link>
      </div>

      <div className={s.products}>
        <div className={s.product}>
          <div className={s.img_wrap}>
            <div className={s.discount}>13% OFF</div>
            <img src="https://placehold.co/250x250" alt="" />
          </div>
          <p className={s.title}>Product title</p>
          <div className={s.price_wrap}>
            <p className={s.price}>$123.00</p>
            <p className={s.old_price}>$210.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
