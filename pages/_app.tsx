import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import styled from "styled-components";
import Header from "app/components/app/header/header";
import { Site } from "site";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "app/utils/graphql/apollo-client";
import { AuthProvider } from "app/hooks/authHook";
import GlobalStylesComponent from "app/components/styles/global-styles";
import { darkThemeFunc } from "app/hooks/useTheme";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <AuthProvider>
        <ApolloProvider client={apolloClient}>
          <Container>
            <Head>
              <script
                dangerouslySetInnerHTML={{
                  __html: darkThemeFunc,
                }}
              />
              <title>{Site.siteName}</title>
              <link rel="shortcut icon" href={Site.mainIcon} />
            </Head>

            <Header />
            <Body>
              <GlobalStylesComponent />
              <Component {...pageProps} />
            </Body>
          </Container>
        </ApolloProvider>
      </AuthProvider>
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
