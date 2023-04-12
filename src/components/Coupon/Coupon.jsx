import React from "react";
import s from "./style.module.css";
import Container from "../Container/Container";
import ButtonLight from "../ButtonLight/ButtonLight";
import img from "./discount_img.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Coupon() {
  return (
    <section className={s.coupon}>
      <Container>
        <div className={s.img_container}>
          <img src={img} alt="discount" />
        </div>
        <div className={s.text_container}>
          <h3>
            <span>5% off</span> <br /> on the first order
          </h3>

          <form className={s.form} method="post">
            <PhoneInput country={"de"} />
            <ButtonLight text="Get a discount" />
          </form>
        </div>
      </Container>
    </section>
  );
}
