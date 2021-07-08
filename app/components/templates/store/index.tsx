import React from "react";
import { Store } from "app/features/stores/store";
import Products from "app/components/modules/product/product-map";
import { Product } from "app/features/products/product";

interface Props {
  store: Store;
}

const StoreTemplate: React.FC<Props> = ({ store }) => {
  const { products } = store;
  return (
    <div tw="space-y-3">
      <div tw="bg-gray-900 flex p-2 rounded-md select-none gap-x-3 space-x-3 h-24 items-center">
        <img src={store.icon} tw="rounded-md h-full" />
        <div tw="flex flex-col space-x-3 gap-3">
          <p tw="font-bold text-3xl">{store.title}</p>
          <p>{store.description}</p>
        </div>
      </div>
      <h2 tw="text-2xl font-medium">قائمة المنتجات</h2>
      <Products products={products as Product[]} />
    </div>
  );
};

export default StoreTemplate;
