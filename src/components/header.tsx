import React from "react";
import { Site } from "site";
import { useTheme } from "src/hooks/useTheme";
import styled from "styled-components";
import HeaderTitle from "./header-title";
import Icon from "./icon";
import SocialIcon from "./social-icon";
import Tab from "./tab";

const Header = () => {
  const [theme, toggleTheme] = useTheme();
  const tabs = Site.tabs;
  return (
    <Container>
      <Top>
        <HeaderTitle />

        <SocialIcon icon="telegram" />
        <SocialIcon icon="instagram" />
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
