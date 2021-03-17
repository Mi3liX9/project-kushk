import React from "react";
import tw from "twin.macro";
import Category from "./category";

interface Props {
  categories: { title: string; key: string }[];
}

const Categories: React.FC<Props> = ({ categories }) => {
  return (
    <Container>
      <Category title="الكل" key="all" />
      {categories.map((category) => (
        <Category title={category.title} key={category.key} />
      ))}
    </Container>
  );
};

export default Categories;

const Container = tw.ul`list-none	flex gap-2 p-0 overflow-y-hidden overflow-x-scroll`;
