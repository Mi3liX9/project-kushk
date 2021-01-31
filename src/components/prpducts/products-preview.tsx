import React from "react";
import List from "../list/list";
import Product, { ProductProps } from "./product-preview";

interface Props {
  products: ProductProps[];
}

const ProductsPreivew: React.FC<Props> = ({ products }) => (
  <List>
    {products.map((product) => (
      <Product title={product.title} price={product.price} key={product.id} />
    ))}
  </List>
);

export default ProductsPreivew;
