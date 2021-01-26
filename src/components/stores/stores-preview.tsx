import React from "react";
import styled from "styled-components";
import StorePreview, { StorePreviewProps } from "./store-preview";

const StoresPreivew: React.FC<{ stores: StorePreviewProps[] }> = (props) => {
  return (
    <Container>
      {props.stores.map((store) => (
        <StorePreview
          title={store.title}
          photoUrl={store.photoUrl}
          categories={store.categories}
          deliveryPrice="15"
          distance="4"
          rate={(store.rate as unknown) as string}
          meetSource={store.meetSource}
          duration={store.duration}
          key={store.title} // Then it should be id;
        />
      ))}
    </Container>
  );
};

export default StoresPreivew;

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
