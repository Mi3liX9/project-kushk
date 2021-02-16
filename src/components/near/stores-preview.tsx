import React from "react";
import { Store } from "src/features/stores/store";
import styled from "styled-components";
import List from "../shared/list/list";
import StorePreview from "./store-preview";

interface Props {
  stores: Store[] | undefined;
}

const StoresPreivew: React.FC<Props> = ({ stores }) => {
  if (!stores) {
    return <Text>جارٍ التنزيل...</Text>;
  }

  if (stores.length === 0) {
    return <Text>لا يوجد متاجر متاحة</Text>;
  }
  return (
    <List>
      {stores.map((store) => (
        <StorePreview {...store} key={store.id} />
      ))}
    </List>
  );
};

export default StoresPreivew;

// const myCategories = new Set<{ title: string; key: string }>();
// defaultStores.forEach((s) =>
//   s.categories.forEach((s) => myCategories.add(s))
// );

const Text = styled.p`
  user-select: none;
  text-align: center;
`;
