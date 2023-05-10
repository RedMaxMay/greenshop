import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import { useSelector } from "react-redux";
import productsAsyncAction from "../../asyncAction/products";
import BasketItem from "../../components/BasketItem/BasketItem";
import s from "./style.module.css";
import BasketTotal from "../../components/BasketTotal/BasketTotal";

export default function BasketPage() {
  const [data, setData] = useState([]);
  const { basket } = useSelector((state) => state.basket);
  const basketProducts = basket.map((item) => {
    const product = data.find((prod) => prod.id === item.id);
    return { ...product, ...item };
  });

  const totalPrice = basketProducts.reduce(
    (sum, item) => sum + (item.discont_price || item.price) * item.quantity,
    0
  );

  useEffect(() => {
    Promise.all(
      basket.map((item) => productsAsyncAction.getSingleProduct(item.id))
    )
      .then((responses) =>
        setData(responses.map((response) => response.data[0]))
      )
      .catch((err) => console.log(err));
  }, [basket]);

  return (
    <main>
      <Container>
        <h1>Shopping cart</h1>

        {data.length === 0 ? (
          <div className={s.empty}>Your cart is empty...</div>
        ) : (
          <div className={s.basket}>
            <div className={s.details}>
              <div className={s.info}>
                <p className={s.products}>Products</p>
                <p className={s.price}>Price</p>
                <p className={s.quantity}>Quantity</p>
                <p className={s.total}>Total</p>
              </div>
              {basketProducts.map((prod) => (
                <BasketItem key={prod.id} {...prod} />
              ))}
            </div>
            <BasketTotal totalPrice={totalPrice} basket={basketProducts} />
          </div>
        )}
      </Container>
    </main>
  );
}
