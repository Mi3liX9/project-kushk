import React from "react";
import { useTheme } from "app/hooks/useTheme";
import styled from "styled-components";
import HeaderTitle from "./header-title";

const Header = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <Container>
      <HeaderTitle />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100vw;
  background: var(--background-secondary);
  padding: 10px;
  user-select: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
