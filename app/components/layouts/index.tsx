import React from "react";
import tw, { styled } from "twin.macro";
import GlobalStylesComponent from "../styles/global-styles";
import Header from "./header/header";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <GlobalStylesComponent />
      <Header />
      {children}
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  ${tw`container mx-auto md:px-24`}
  min-height: 100vh;
`;
