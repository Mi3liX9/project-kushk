import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Store } from "src/features/stores/store";

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

export function useStores() {
  const { loading, error, data } = useQuery<{ stores: Store[] }>(STORES_QUERY);

  const [search, setSearch] = useState("");
  const [stores, setStores] = useState(data?.stores);
  // const [category, setCategory] = useState("");

  useEffect(() => {
    const words = search.split(" ");
    if (!loading) {
      const filteredStores = data?.stores.filter(
        (store) => words.every((word) => store.title.includes(word))
        // &&
        // (category === "" ? true : store.categories.includes(category))
      );
      setStores(filteredStores);
    }
  }, [search, loading]);

  return {
    search,
    setSearch,
    stores,
    error,
    loading,
    defaultStores: data?.stores,
  };
}
