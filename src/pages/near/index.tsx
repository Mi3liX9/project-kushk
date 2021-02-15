import React from "react";
import StoresPreivew from "src/components/near/stores-preview";
import { Store } from "src/features/stores/store";
import { gql, useQuery } from "@apollo/client";

interface Props {}

const StoresQuery = gql`
  query stores {
    stores {
      title
      id
    }
  }
`;

const Home: React.FC<Props> = () => {
  const { loading, error, data } = useQuery<{ stores: Store[] }>(StoresQuery);
  if (loading) return <div>lodaing...</div>;
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    // <StoresProvider stores={data?.stores}>
    <StoresPreivew stores={data!.stores} />
    // </StoresProvider>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps = async (context) => {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: StoresQuery,
//   });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   };
// };
