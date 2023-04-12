import React from "react";
import Container from "../../components/Container/Container";
import { useSelector } from "react-redux";

export default function CategoriesPage() {
  const categories = useSelector((state) => state);

  console.log(categories);

  return (
    <main>
      <Container>CategoriesPage</Container>
    </main>
  );
}
