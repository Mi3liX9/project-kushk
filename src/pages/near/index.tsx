import React from "react";
import StoresPreivew from "src/components/near/stores-preview";
import SearchBar from "src/components/shared/searchbar/search-bar";
import { useStores } from "src/hooks/useStores";

const Home: React.FC = () => {
  const { stores, search, setSearch, error } = useStores();

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <StoresPreivew stores={stores} />
    </div>
  );
};

export default Home;
