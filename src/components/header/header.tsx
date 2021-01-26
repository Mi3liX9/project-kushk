import React from "react";
import { Site } from "site";
import { useTheme } from "src/hooks/useTheme";
import styled from "styled-components";
import HeaderTitle from "./header-title";
import Tab from "./tab";

const Header = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <Container>
      {/* <Top> */}
      <HeaderTitle />
      {/* </Top> */}
    </Container>
  );
};

export default Header;

const Container = styled.header`
  background: var(--background-secondary);
  padding: 10px;
  user-select: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  min-width: 100%;
  max-height: 100px;
`;

{
  /* <a
            href={Site.socialMedia[0].url}
            target="_blank"
            style={{ height: 45 }}
          >
            <MyIcon src={Site.socialMedia[0].image} />
          </a>
          <ToggleTheme
            onClick={toggleTheme as any}
            src={theme == "dark" ? "/icons/moon.svg" : "/icons/sun.svg"}
          /> */
}
