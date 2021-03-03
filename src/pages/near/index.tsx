import Link from "next/link";
import React, { useEffect } from "react";
import StoresPreivew from "src/components/near/stores-preview";
import SearchBar from "src/components/shared/searchbar/search-bar";
import { useAuth } from "src/hooks/authHook";
import { useStores } from "src/hooks/useStores";

const Near: React.FC = () => {
  const { stores, search, setSearch, error, refetch } = useStores();
  const { user } = useAuth();

  useEffect(() => {
    (async () => await refetch())();
  }, []);

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <StoresPreivew stores={stores} />
      {}
      {user ? (
        <Link href="/stores/add">
          <button>اضافة متجر</button>
        </Link>
      ) : null}
    </div>
  );
};

export default Near;
