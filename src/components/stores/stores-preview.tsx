import React from "react";
import List from "../list/list";
import StorePreview, { StorePreviewProps } from "./store-preview";

interface Props {
  stores: StorePreviewProps[];
}

const StoresPreivew: React.FC<Props> = ({ stores }) => {
  return (
    <List requiresImage={true}>
      {stores.map((store) => (
        <StorePreview
          title={store.title}
          photoUrl={store.photoUrl}
          categories={store.categories}
          key={store.id}
        />
      ))}
    </List>
  );
};

export default StoresPreivew;
