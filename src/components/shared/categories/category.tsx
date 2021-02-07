import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  key: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Category: React.FC<Props> = ({ title, onClick, children, key }) => {
  return (
    <li>
      <a href={"#" + key}>
        <Conainer id={key} onClick={onClick}>
          {title}
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
