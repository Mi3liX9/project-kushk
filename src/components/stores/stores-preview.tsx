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
        <StorePreview {...store} key={store.id} />
      ))}
    </List>
  );
};

export default StoresPreivew;
