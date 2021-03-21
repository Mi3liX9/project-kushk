import { gql, useQuery } from "@apollo/client";
import HomeTemplate from "app/components/templates/home";
import { Product } from "app/features/products/product";
import React from "react";

const Home: React.FC = () => {
  const { loading, data, error } = useQuery<{ products: Product[] }>(
    PRODUCTS_QUERY
  );

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;
  return (
    <div>
      <HomeTemplate products={data?.products as Product[]} />
    </div>
  );
};

export default Home;

const PRODUCTS_QUERY = gql`
  query Products {
    products {
      id
      title
      description
      mainImage
      # price
    }
  }
`;
