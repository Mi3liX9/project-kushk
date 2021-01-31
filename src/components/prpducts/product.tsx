import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  descreption?: string;
  price: string;
  photo?: string;
}

const Product: React.FC<Props> = (product) => {
  return (
    <Container>
      {product.photo ? <Image src={product.photo} /> : null}
      <Information>
        <Title>{product.title}</Title>
        {product.descreption ? <Text>{product.descreption}</Text> : null}
        <Text>{product.price} ريال</Text>
      </Information>
    </Container>
  );
};

export default Product;

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
  gap: 5px;
  flex-direction: column;
`;

const Image = styled.img`
  object-fit: cover;
  aspect-ratio: 1 / 1;
  height: 60px;
  width: 60px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  opacity: 0.8;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
`;

const Title = styled(Text)`
  font-weight: 600;
`;
