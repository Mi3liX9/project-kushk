import React from "react";
import tw, { styled } from "twin.macro";
import Product, { Props as ProductProps } from "./product";

const Products: React.FC<{ products: ProductProps[] }> = ({ products }) => (
  <Container>
    {products.map((product) => (
      <Product {...product} key={product.id} />
    ))}
  </Container>
);

export default Products;

const Container = styled.div`
  ${tw`grid gap-2 items-center justify-center`}
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
`;
