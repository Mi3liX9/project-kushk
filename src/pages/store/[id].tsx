import React from "react";
import List from "src/components/list/list";
import Product from "src/components/prpducts/product-preview";
import ProductsPreivew from "src/components/prpducts/products-preview";
import styled from "styled-components";

type ProductType = { title: string; price: string };

const products: ProductType[] = [
  { title: "بيض بالجبن", price: "5" },
  { title: "جبن", price: "4" },
  { title: "لحم بالعجين", price: "5" },
  { title: "لحم بالجبن", price: "5" },
];

const StorePage = () => {
  return <ProductsPreivew products={products} />;
};

export default StorePage;
