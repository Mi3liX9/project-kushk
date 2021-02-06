import React from "react";
import styled from "styled-components";
import ListItem from "../shared/list/list-item";

export interface ProductProps {
  id: string;
  title: string;
  descreption?: string;
  price: string;
  photo?: string;
}

const Product: React.FC<ProductProps> = (product) => {
  return (
    <ListItem>
      {product.photo ? <Image src={product.photo} /> : null}
      <Information>
        <Title>{product.title}</Title>
        {product.descreption ? <Text>{product.descreption}</Text> : null}
        <Text>{product.price} ريال</Text>
      </Information>
    </ListItem>
  );
};

export default Product;

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
