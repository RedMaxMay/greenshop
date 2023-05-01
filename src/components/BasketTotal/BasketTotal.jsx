import React, { useState } from "react";
import s from "./style.module.css";
import Button from "../Button/Button";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import URL from "../../asyncAction/url";
import ThanksForOrderModal from "../ThanksForOrderModal/ThanksForOrderModal";

const sendOrder = (data) => {
  return axios.post(`${URL}/order/send`);
};

export default function BasketTotal({ totalPrice }) {
  const [phone, setPhone] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isCorrectPhone, setIsCorrectPhone] = useState(true);

  const phoneClass = isCorrectPhone
    ? s.input_wrap
    : `${s.input_wrap} ${s.input_wrap_error}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone.length > 5) {
      setIsCorrectPhone(true);
      sendOrder(phone)
        .then((resp) => {
          setPhone("");
          setIsSent(true);
        })
        .catch((err) => console.log(err));
    } else {
      setIsCorrectPhone(false);
    }
  };

  return (
    <div className={s.total}>
      {isSent ? <ThanksForOrderModal setIsSent={setIsSent} /> : ""}
      <div className={s.head}>
        <p>Cart Total: </p>
      </div>

      <div className={s.info}>
        <div className={s.price_wrap}>
          <p className={s.title}>Total price: </p>
          <p className={s.price}>${totalPrice.toFixed(2)}</p>
        </div>
        <form className={s.form} method="post" onSubmit={handleSubmit}>
          <div className={phoneClass}>
            <PhoneInput
              country={"de"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
            />
          </div>
          <Button text="Order" />
        </form>
      </div>
    </div>
  );
}
