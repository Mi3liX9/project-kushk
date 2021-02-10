import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import StoresPreivew from "src/components/near/stores-preview";
import StoresProvider from "src/hooks/useStores";
import { Store } from "src/features/stores/store";

const initialStores: Store[] = [];

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
