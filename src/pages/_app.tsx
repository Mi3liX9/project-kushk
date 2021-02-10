import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import styled from "styled-components";
import Header from "src/components/app/header/header";

import "../styles/globals.css";
import { Site } from "site";
import React from "react";
import Footer from "src/components/app/footer/footer";
import { darkThemeFunc } from "src/utils/clinet/dark-theme.function";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: darkThemeFunc,
          }}
        />
        <title>{Site.siteName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href={Site.mainIcon} />
        {Site.meta.map((meta) => (
          <meta
            // name={meta.property}
            property={meta.property}
            content={meta.content}
            key={meta.key ?? meta.property}
          />
        ))}
      </Head>

      <Container>
        <Header />
        <Body>
          <Component {...pageProps} />
        </Body>
        {/* <Footer /> */}
      </Container>
    </>
  );
};

export default MyApp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 100vh;
  align-items: center;
`;

const Body = styled.div`
  width: min(100vw, 700px);
  padding: 0 5px;
  padding-bottom: 50px;
`;
