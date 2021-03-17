import React from "react";
import List from "../../elements/list/list";
import Product, { ProductProps } from "./product-preview";

interface Props {
  products: ProductProps[];
}

const ProductsPreivew: React.FC<Props> = ({ products }) => (
  <List>
    {products.map((product) => (
      <Product
        id={product.id}
        title={product.title}
        price={product.price}
        key={product.id}
      />
    ))}
  </List>
);

export default ProductsPreivew;
