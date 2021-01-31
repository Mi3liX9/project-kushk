import React from "react";
import Link from "next/link";
import styled from "styled-components";
import ListItem from "../list/list-item";

export interface StorePreviewProps {
  title: string;
  photoUrl: string;
  categories: string;
}

const StorePreview: React.FC<StorePreviewProps> = (store) => {
  return (
    <Link href="/store/1">
      <a>
        <ListItem icon={store.photoUrl}>
          <Information>
            <Title id="title">{store.title}</Title>
            <Categories id="cateories">{store.categories}</Categories>
          </Information>
        </ListItem>
      </a>
    </Link>
  );
};

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
  flex-basis: 30%;
`;
const Title = styled(Text)`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1px;
  flex-basis: 100%;
`;

const Categories = styled(Text)`
  flex-basis: 100%;
`;
