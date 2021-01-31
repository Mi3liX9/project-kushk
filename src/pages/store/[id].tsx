import React from "react";
import Product from "src/components/prpducts/product";
import styled from "styled-components";

type ProductType = { title: string; price: string };

const products: ProductType[] = [
  { title: "بيض بالجبن", price: "5" },
  { title: "جبن", price: "4" },
  { title: "لحم بالعجين", price: "5" },
  { title: "لحم بالجبن", price: "5" },
];

const StorePage = () => {
  return (
    <Container>
      {products.map((product) => (
        <Product title={product.title} price={product.price} />
      ))}
    </Container>
  );
};

export default StorePage;

const Container = styled.div`
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
