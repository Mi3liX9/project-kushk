import Link from "next/link";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  title: string;
  key: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Category: React.FC<Props> = ({ title, onClick, children, key }) => {
  return (
    <li>
      <a href={"#" + key}>
        <Container id={key} onClick={onClick}>
          {title}
        </Container>
      </a>
    </li>
  );
};

export default Category;

const Container = tw.div`p-10 rounded-md select-none cursor-pointer`;
