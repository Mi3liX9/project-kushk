import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useStores } from "src/hooks/useStores";
import List from "../shared/list/list";
import SearchBar from "../shared/searchbar/search-bar";
import StorePreview from "./store-preview";

const StoresPreivew: React.FC = ({}) => {
  const { stores, setStores, defaultStores } = useStores();
  const [value, setValue] = useState("");
  // const [category, setCategory] = useState("");
  // const router = useRouter();

  // useEffect(() => {
  //   router.replace("/near#");
  // }, []);

  // useEffect(() => {
  //   const words = value.split(" ");
  //   const filteredStores = defaultStores.filter(
  //     (store) =>
  //       words.every((word) => store.title.includes(word)) &&
  //       (category === "" ? true : store.categories.includes(category))
  //   );
  //   setStores(filteredStores);
  // }, [value, category, defaultStores]);

  const myCategories = new Set<string>();
  defaultStores.forEach((s) =>
    s.categories.forEach((s) => myCategories.add(s))
  );

  return (
    <List requiresImage>
      <SearchBar
        value={value}
        onChange={(e) => setValue(e.target.value)}
        categories={[...myCategories]}
      />
      {stores.map((store) => (
        <StorePreview {...(store as any)} key={store.id} />
      ))}
    </List>
  );
};

export default StoresPreivew;
