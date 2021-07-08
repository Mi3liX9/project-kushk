import { gql, useQuery } from "@apollo/client";
import StoresTemplate from "app/components/templates/stores";
import { Store } from "app/features/stores/store";
import { useStores } from "app/hooks/useStores";

const StoresPage = () => {
  const { loading, data, error } = useQuery<{ stores: Store[] }>(STORES_QUERY);

  if (loading) return <div>{loading}</div>;
  return <StoresTemplate stores={data?.stores!} />;
};

export default StoresPage;

const STORES_QUERY = gql`
  query Stores {
    stores {
      id
      title
      icon
      description
    }
  }
`;
