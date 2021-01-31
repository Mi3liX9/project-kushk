import React from "react";
import ProductsPreivew from "src/components/prpducts/products-preview";

type ProductType = { id: string; title: string; price: string };

const products: ProductType[] = [
  { id: "1", title: "بيض بالجبن", price: "5" },
  { id: "2", title: "جبن", price: "4" },
  { id: "3", title: "لحم بالعجين", price: "5" },
  { id: "4", title: "لحم بالجبن", price: "5" },
];

const StorePage = () => {
  return <ProductsPreivew products={products} />;
};

export default StorePage;
