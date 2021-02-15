import React, { useState } from "react";
import { Store } from "src/features/stores/store";
import List from "../shared/list/list";
import SearchBar from "../shared/searchbar/search-bar";
import StorePreview from "./store-preview";

interface Props {
  stores: Store[];
}

const StoresPreivew: React.FC<Props> = ({ stores }) => {
  // const [value, setValue] = useState("");
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

  // const myCategories = new Set<{ title: string; key: string }>();
  // defaultStores.forEach((s) =>
  //   s.categories.forEach((s) => myCategories.add(s))
  // );

  return (
    <List requiresImage>
      {/* <SearchBar
        value={value}
        onChange={(e) => setValue(e.target.value)}
        categories={[]}
      /> */}
      {stores.map((store) => (
        <StorePreview {...store} key={store.id} />
      ))}
    </List>
  );
};

export default StoresPreivew;
