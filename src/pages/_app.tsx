import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import styled from "styled-components";
import Header from "src/components/header";
import Footer from "src/components/footer";

import "../styles/globals.css";
import { Site } from "site";
import React from "react";

const darkThemeFunc = `
              (function() {
                window.__onThemeChange = function() {};
                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  document.querySelector(":root").className = newTheme;
                  localStorage.setItem('theme', newTheme);
                  window.__onThemeChange(newTheme);
                }
                var preferredTheme;
                try {
                  preferredTheme = localStorage.getItem('theme');
                } catch (err) { }
                window.__setPreferredTheme = function(newTheme) {
                  setTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {}
                }
                var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                darkQuery.addListener(function(e) {
                  window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                });
                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
              })();
            `;

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
            name={meta.name}
            property={meta.property}
            content={meta.content}
            key={meta.key}
          />
        ))}
      </Head>

      <Container>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </>
  );
};

export default MyApp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 10px;
  min-height: 100vh;

  @media (min-width: 1024px) and (orientation: landscape) {
    padding: 5px 15%;
  }
`;
