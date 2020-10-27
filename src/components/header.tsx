import React from "react";
import { Site } from "site";
import { useTheme } from "src/hooks/useTheme";
import styled from "styled-components";
import HeaderTitle from "./header-title";
import Icon from "./icon";
import Tab from "./tab";

const Header = () => {
  const [theme, toggleTheme] = useTheme();
  const tabs = Site.tabs;
  return (
    <Container>
      <Top>
        <HeaderTitle />
        <a
          href={Site.socialMedia[0].url}
          target="_blank"
          style={{ height: 45 }}
        >
          <MyIcon src={Site.socialMedia[0].image} />
        </a>

        <ToggleTheme
          onClick={toggleTheme as any}
          src={theme == "dark" ? "/icons/moon.svg" : "/icons/sun.svg"}
        />
      </Top>
      <Tabs>
        {tabs.map((tab) => (
          <Tab href={tab.path}>{tab.title}</Tab>
        ))}
      </Tabs>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  background: var(--background-secondary);
  border-radius: 5px;
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

const Tabs = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  height: 40px;
`;

const ToggleTheme = styled(Icon)`
  :hover {
    transform: rotate(360deg);
  }
`;

const MyIcon = styled(Icon)`
  border-radius: 0px;
  transition: all 50ms linear;
  :hover {
    background: transparent;
    transform: scale(1.15);
  }
`;
