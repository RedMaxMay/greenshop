import React from "react";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import img from "./404.png";
import { Link } from "react-router-dom";
import s from "./style.module.css";


export default function NotFoundPage() {
  return (
    <main>
      <Container>
        <div className={s.page}>
          <img src={img} alt="Page is not found" />
          <p>Oops, something happened, this page is missing!</p>
          <Link to="/greenshop">
            <Button text="back to home page" />
          </Link>
        </div>
      </Container>
    </main>
  );
}
