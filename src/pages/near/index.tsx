import React from "react";
import StoresPreivew from "src/components/near/stores-preview";
import SearchBar from "src/components/shared/searchbar/search-bar";
import { useStores } from "src/hooks/useStores";
// import tw from "twin.macro";

const Near: React.FC = () => {
  const { stores, search, setSearch, error } = useStores();

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <Input></Input>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <StoresPreivew stores={stores} />
    </div>
  );
};

export default Near;
// import tw from "twin.macro";

const Input = tw.input`border hover:border-black`;
