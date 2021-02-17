import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { env } from "process";
import { useMemo } from "react";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createLink() {
  if (typeof window === "undefined") {
    return new HttpLink({
      uri: "https://kushk.mi3lix9.vercel.app//api/graphql",
    });
  }
  return new HttpLink({
    uri: "api/graphql",
  });
}

function createApolloClient() {
  apolloClient = new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createLink(),
    cache: new InMemoryCache(),
  });
  return apolloClient;
}

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
