import React from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { gql, useQuery } from "@apollo/client";
import { initializeApollo } from "app/utils/graphql/apollo-client";
import { useAuth } from "app/hooks/authHook";
import { Store } from "app/features/stores/store";
import { Product } from "app/features/products/product";
import StoreTemplate from "app/components/templates/store";

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
        mainImage
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

interface Props extends InferGetStaticPropsType<GetStaticProps> {}

const StorePage: React.FC<Props> = ({ id }) => {
  const { user } = useAuth();
  const { loading, error, data, refetch } = useQuery<{ store: Store }>(
    STORE_QUERY,
    { variables: { id } }
  );

  if (loading) return <div>lodaing...</div>;
  if (error) return <div>error</div>;
  return <StoreTemplate store={data?.store!} />;
};

export default StorePage;
