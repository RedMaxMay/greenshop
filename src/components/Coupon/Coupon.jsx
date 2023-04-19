import React from "react";
import s from "./style.module.css";
import Container from "../Container/Container";
import ButtonLight from "../ButtonLight/ButtonLight";
import img from "./discount_img.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";

export default function Coupon() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      category: "",
      checkbox: [],
      radio: "",
    },
  });

  return (
    <section className={s.coupon}>
      <Container>
        <div className={s.img_container}>
          <img src={img} alt="discount" />
        </div>
        <div className={s.text_container}>
          <h3>
            <span className={s.percentage}>5% off</span> <br /> on the first
            order
          </h3>

          <form
            className={s.form}
            method="post"
            onSubmit={handleSubmit(console.log)}
          >
            
            <PhoneInput
              country={"de"}
              inputProps={{
                required: true,
              }}
            />

            <ButtonLight text="Get a discount" />
          </form>
        </div>
      </Container>
    </section>
  );
}
