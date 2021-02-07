import React from "react";
import styled from "styled-components";
import Category from "./category";

interface Props {
  categories: string[];
}

const Categories: React.FC<Props> = ({ categories }) => {
  return (
    <Container>
      <Category>الكل</Category>
      {categories.map((category) => (
        <Category title={category} key={category} />
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
