import React from "react";
import { useRouter } from "next/router";
import { useTheme } from "src/hooks/useTheme";
import styled, { css } from "styled-components";
import HeaderTitle from "./header-title";
import Icon from "./icon";
import SocialIcon from "./social-icon";
const Header = () => {
  const [theme, toggleTheme] = useTheme();
  const router = useRouter();
  const path = router.pathname;

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
        <Tab isHere={path == "/"}>المدونة التقنية</Tab>
        <Tab>قائمة الأنمي</Tab>
        <Tab>اكسبريس</Tab>
        <Tab>مشتريات</Tab>
        <Tab>الأسئلة الشائعة</Tab>
        <Tab>من أنا</Tab>
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

const Tab = styled.a<{ isHere?: boolean }>`
  --tab-color: var(--text-color-primary);

  ${({ isHere }) =>
    isHere
      ? css`
          border-bottom: 3px solid var(--tab-color);
          font-weight: bold;
        `
      : null}
  text-decoration: none;
  padding: 5px;
  color: var(--tab-color);
  :hover {
    --tab-color: var(--color-primary);
    border-bottom: 2px solid var(--tab-color);
  }
`;

const ToggleTheme = styled(Icon)`
  :hover {
    transform: rotate(360deg);
  }
`;
