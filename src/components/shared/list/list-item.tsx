import React from "react";
import { Site } from "site";
import styled from "styled-components";

interface Props {
  icon?: string;
  iconRadius?: string;
}

const ListItem: React.FC<Props> = ({ children, icon, iconRadius }) => {
  return (
    <Item>
      <Icon src={icon} iconRadius={iconRadius} />
      <Children>{children}</Children>
    </Item>
  );
};

export default ListItem;

const Item = styled.li`
  display: flex;
  background: var(--background-secondary);
  align-items: center;
  padding: 1rem;
  gap: 10px;
  border-radius: 20px;
  user-select: none;
  cursor: pointer;

  p {
    opacity: 0.8;
  }

  :hover {
    background: var(--color-main);
    p {
      opacity: 1;
    }
  }
`;

const Children = styled.div`
  display: flex;
  gap: 15px 10px;
  flex-wrap: wrap;
`;

const Icon = styled.img<{ iconRadius?: string }>`
  object-fit: cover;
  aspect-ratio: 1 / 1;
  height: 60px;
  width: 60px;
  border-radius: ${(props) => props.iconRadius ?? `50%`};
`;
