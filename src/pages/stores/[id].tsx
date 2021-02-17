import { gql, useQuery } from "@apollo/client";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import Categories from "src/components/shared/categories/categories";
import ProductsPreivew from "src/components/stores/products-preview";
import { Store } from "src/features/stores/store";
import { initializeApollo } from "src/utils/client/apollo-client";
import styled from "styled-components";

type ProductType = { id: string; title: string; price: string };

const products: ProductType[] = [
  { id: "1", title: "بيض بالجبن", price: "5" },
  { id: "2", title: "جبن", price: "4" },
  { id: "3", title: "لحم بالعجين", price: "5" },
  { id: "4", title: "لحم بالجبن", price: "5" },
];

interface Props extends InferGetStaticPropsType<GetStaticProps> {}

const StorePage: React.FC<Props> = ({ id }) => {
  const { loading, error, data } = useQuery<{ store: Store }>(STORE_QUERY, {
    variables: { id },
  });

  if (error) {
    return <div>{error.message}</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <Container>
      <StoreInfo>
        <StoreImg
          src={data?.store.icon ?? "https://d.top4top.io/p_185160wxc1.jpg"}
        />
        <h1>{data?.store.title}</h1>
        <p>{data?.store.description}</p>
      </StoreInfo>
      {/* <H2>قائمة الوجبات</H2> */}
      {/* <ProductsPreivew products={products} /> */}
    </Container>
  );
};

export default StorePage;

const STORES_QUERY = gql`
  query Stores {
    stores {
      id
    }
  }
`;

const STORE_QUERY = gql`
  query Store($id: String) {
    store(data: { id: $id }) {
      id
      title
      description
      icon
    }
  }
`;

export const getStaticProps: GetStaticProps = async (context) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: STORE_QUERY,
    variables: { id: context.params?.id },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      id: context.params?.id,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<{ stores: Store[] }>({
    query: STORES_QUERY,
  });
  const paths = data.stores.map(({ id }) => ({ params: { id } }));
  return {
    paths,
    fallback: true,
  };
};

const StoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--background-secondary);
  border-radius: 2px;
  padding: 15px;
  /* margin: 10px; */
  text-align: center;
`;

const StoreImg = styled.img`
  width: 150px;
  border-radius: 50%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const H2 = styled.h2`
  margin: 0;
  padding: 0;
`;
