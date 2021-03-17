import React from "react";
import tw, { styled } from "twin.macro";
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

const Information = tw.div`flex flex-col gap-2`;

const Image = tw.img`object-cover w-60 h-60`;

const Text = tw.p`text-base leading-normal m-0`;

const Title = tw(Text)`font-semibold`;
