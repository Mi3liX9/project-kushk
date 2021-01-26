import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  title: string;
  photoUrl: string;
  categories: string;
  deliveryPrice: string;
  duration: string;
  meetSource: string;
  distance: string;
  rate: string;
}

const StorePreview: React.FC<Props> = (store) => {
  return (
    <Container title={store.title}>
      <Image src={store.photoUrl} draggable={false} />
      <Information className="details">
        <Text className="title">{store.title}</Text>
        <Text className="cateories">{store.categories}</Text>
        {store.deliveryPrice ? (
          <Text>{store.deliveryPrice} ريال</Text>
        ) : (
          <Text>استلام فقط</Text>
        )}
        <Text>{store.duration} دقيقة</Text>
        <Text>{store.distance} كيلو</Text>
        <Text>مصدر اللحوم: {store.meetSource}</Text>
        <Text>التقييم: {store.rate}</Text>
      </Information>
    </Container>
  );
};

export default StorePreview;

const Container = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 0.4rem;
  gap: 10px;
  border-radius: 10px;
  user-select: none;
  cursor: pointer;

  :hover {
    background: var(--background-icon);
    p {
      opacity: 1;
    }
  }
`;

const Information = styled.div`
  display: grid;
  gap: 15px 10vw;
  grid-template-columns: auto auto auto;

  .title {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 3px;
  }

  .title,
  .cateories {
    grid-column: 1 / -1;
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
  line-height: 0.6;
  opacity: 0.8;
`;
