import Products from "app/components/modules/product/product-map";
import { Product } from "app/features/products/product";
import React from "react";

interface Props {
  products: Product[];
}

const HomeTemplate: React.FC<Props> = ({ products }) => {
  return (
    <div tw="space-y-3">
      <div tw="h-48 bg-white dark:bg-gray-900"></div>
      <h2 tw="text-2xl font-medium">قائمة المنتجات</h2>
      <Products products={products as Product[]} />
    </div>
  );
};

export default HomeTemplate;
