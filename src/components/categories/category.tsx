import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface Props {
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Category: React.FC<Props> = ({ title = "", onClick, children }) => {
  return (
    <li>
      <a href={"#" + title}>
        <Conainer id={title} onClick={onClick}>
          {children ?? title}
        </Conainer>
      </a>
    </li>
  );
};

export default Category;

const Conainer = styled.div`
  padding: 10px;
  border-radius: 10px;
  user-select: none;
  cursor: pointer;
  background: var(--background-secondary);

  :target,
  :hover {
    background: var(--color-main);
  }
`;
