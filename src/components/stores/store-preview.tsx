import React from "react";
import Link from "next/link";
import styled from "styled-components";

export interface StorePreviewProps {
  title: string;
  photoUrl: string;
  categories: string;
}

const StorePreview: React.FC<StorePreviewProps> = (store) => {
  return (
    <Link href="/store/1">
      <Container title={store.title}>
        <Image src={store.photoUrl} draggable={false} />
        <Information className="details">
          <Text id="title">{store.title}</Text>
          <Text id="cateories">{store.categories}</Text>
        </Information>
      </Container>
    </Link>
  );
};

export default StorePreview;

const Container = styled.a`
  display: flex;
  background: var(--background-secondary);
  align-items: center;
  padding: 1rem;
  gap: 10px;
  border-radius: 20px;
  user-select: none;
  cursor: pointer;

  :hover {
    background: var(--color-main);

    p {
      opacity: 1;
    }
  }
`;

const Information = styled.div`
  display: flex;
  gap: 15px 10px;
  flex-wrap: wrap;

  #title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1px;
  }

  #title,
  #cateories {
    flex-basis: 100%;
  }
`;

const Image = styled.img`
  object-fit: cover;
  aspect-ratio: 1 / 1;
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

const Text = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1;
  opacity: 0.8;
  flex-basis: 30%;
`;
