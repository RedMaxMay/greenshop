import React, { useEffect, useState } from "react";
import s from "./style.module.css";
import Container from "../Container/Container";
import ButtonLight from "../ButtonLight/ButtonLight";
import img from "./discount_img.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import URL from "../../asyncAction/url";

const sendPhone = (data) => {
  return axios.post(`${URL}/sale/send`);
};

export default function Coupon() {
  const [phone, setPhone] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    sendPhone(phone)
      .then((resp) => {
        setPhone("");
        setIsSent(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className={s.coupon}>
      <Container>
        <div className={s.img_container}>
          <img src={img} alt="discount" />
        </div>
        {isSent ? (
          <div className={s.text_container}>
            <h3>
              <p>Thank you!</p>
              <p>Now the discount is tied to your phone number.</p>
              <p>Happy shopping :)</p>
            </h3>
          </div>
        ) : (
          <div className={s.text_container}>
            <h3>
              <span className={s.percentage}>5% off</span> <br /> on the first
              order
            </h3>

            <form className={s.form} method="post" onSubmit={handleSubmit}>
              <PhoneInput
                country={"de"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />

              <ButtonLight text="Get a discount" />
            </form>
          </div>
        )}
      </Container>
    </section>
  );
}
