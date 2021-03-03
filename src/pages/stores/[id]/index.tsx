import { gql, useQuery } from "@apollo/client";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import React, { useEffect } from "react";
import Categories from "src/components/shared/categories/categories";
import ProductsPreivew from "src/components/stores/products-preview";
import { Store } from "src/features/stores/store";
import { useAuth } from "src/hooks/authHook";
import { initializeApollo } from "src/utils/graphql/apollo-client";
import styled from "styled-components";

interface Props extends InferGetStaticPropsType<GetStaticProps> {}

const StorePage: React.FC<Props> = ({ id }) => {
  const { user } = useAuth();
  const { loading, error, data, refetch } = useQuery<{ store: Store }>(
    STORE_QUERY,
    {
      variables: { id },
    }
  );

  useEffect(() => {
    (async () => await refetch())();
  }, []);

  if (error) {
    return <div>{error.message}</div>;
  }
  if (loading) {
    return <div>loading....</div>;
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
      <H2>قائمة المنتجات</H2>
      <ProductsPreivew products={data?.store.products as any} />
      {user ? (
        <Link href={id + "/dashboard"}>
          <button>اضافة متجر</button>
        </Link>
      ) : null}
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
      products {
        title
        images
        description
      }
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
