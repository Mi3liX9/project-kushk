import React from "react";
import styled from "styled-components";
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

const Container = styled.ul`
  list-style: none;
  display: flex;
  gap: 5px;
  padding: 0;
  /* margin-block: 10px; */

  overflow-y: hidden;
  overflow-x: scroll;
`;
