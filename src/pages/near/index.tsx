import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import StoresPreivew from "src/components/near/stores-preview";
import StoresProvider from "src/hooks/useStores";
import { Store } from "src/models/store";

const initialStores: Store[] = [
  {
    id: "test1",
    title: "معطم الفراتي",
    icon: "https://d.top4top.io/p_185160wxc1.jpg",
    type: "restaurant",
    description: "it is just a test",
    products: [
      { id: "test1", title: "test1", price: 10, images: [], categories: [] },
    ],
    categories: [{ title: "test1", key: "test1" }],
  },
];

interface Props extends InferGetStaticPropsType<typeof getStaticProps> {}

const Home: React.FC<Props> = ({ stores }) => {
  return (
    <StoresProvider stores={stores}>
      <StoresPreivew />
    </StoresProvider>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{ stores: Store[] }> = async (
  context
) => {
  return {
    props: {
      stores: initialStores,
    },
  };
};
