import React from "react";
import Link from "next/link";
import styled from "styled-components";
import ListItem from "../shared/list/list-item";
import { Store } from "src/features/stores/store";

export interface StorePreviewProps extends Store {}

const StorePreview: React.FC<StorePreviewProps> = (store) => (
  <Link href={"/stores/" + store.id}>
    <a>
      <ListItem icon={store.icon ?? "/icons/Kushk-Logo-Orange.png"}>
        <Information>
          <Title id="title">{store.title}</Title>
          <Text>{store.description}</Text>
          {/* <Categories id="cateories">
            {store.categories.map((c) => c.title + " ")}
          </Categories> */}
        </Information>
      </ListItem>
    </a>
  </Link>
);

export default StorePreview;

const Information = styled.div`
  display: flex;
  gap: 15px 10px;
  flex-wrap: wrap;
`;

const Text = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1;
  flex-basis: 100%;
`;
const Title = styled(Text)`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1px;
`;

const Section = styled(Text)`
  flex-basis: 30%;
`;

// const Categories = styled(Text)`
//   flex-basis: 100%;
// `;
