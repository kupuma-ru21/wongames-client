import { useMemo } from 'react';
import type { NormalizedCacheObject } from '@apollo/client';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // true
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = {}) {
  const apolloClientGlobal = apolloClient ?? createApolloClient();

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState);
  }

  if (typeof window === 'undefined') return apolloClientGlobal;

  apolloClient = apolloClient ?? apolloClientGlobal;
  return apolloClient;
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => {
    return initializeApollo(initialState);
  }, [initialState]);
  return store;
}
