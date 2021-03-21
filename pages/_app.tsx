import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "app/utils/graphql/apollo-client";
import { AuthProvider } from "app/hooks/authHook";
import Layout from "app/components/layouts";
import MyHead from "app/components/layouts/head";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <AuthProvider>
      <ApolloProvider client={apolloClient}>
        <MyHead />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </AuthProvider>
  );
};

export default MyApp;