import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsAsyncAction from "../../asyncAction/products";
import Container from "../../components/Container/Container";
import s from "./style.module.css";
import URL from "../../asyncAction/url";
import Button from "../../components/Button/Button";
import ButtonLight from "../../components/ButtonLight/ButtonLight";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/basketSlice";

export default function SingleProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const cartHandle = () => {
    dispatch(addToBasket({ id: +id, quantity }));
    setIsAdded(true);
  };

  useEffect(() => {
    productsAsyncAction
      .getSingleProduct(id)
      .then(({ data }) => setProduct(data[0]))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <main>
      <Container>
        {product.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div className={s.product}>
            <div className={s.img_wrap}>
              <img src={`${URL}/${product.image}`} alt={product.title} />
            </div>

            <div className={s.all_info_wrap}>
              <h1 className={s.title}>{product.title}</h1>

              <div className={s.price_wrap}>
                {product.discont_price === null ? (
                  <p className={s.price}>${product.price.toFixed(2)}</p>
                ) : (
                  <>
                    <p className={s.price}>
                      ${product.discont_price.toFixed(2)}
                    </p>
                    <p className={s.old_price}>${product.price.toFixed(2)}</p>
                  </>
                )}
              </div>

              <div className={s.btns}>
                <div className={s.quantity_wrap}>
                  <ButtonLight text="-" onClick={handleDecrement} />
                  <p>{quantity}</p>
                  <ButtonLight text="+" onClick={handleIncrement} />
                </div>
                {isAdded ? (
                  <Button text="✔ Added to cart" />
                ) : (
                  <Button onClick={cartHandle} text="Add to Cart" />
                )}
              </div>

              <div className={s.description}>
                <p className={s.description_title}>Description: </p>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        )}
      </Container>
    </main>
  );
}
