import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ProfilesProvider from '../contexts/profilesContext';
import Container from '../components/Container/Container';
import ReduxProvider from '../redux/provider';
import DataContextProvider from '../contexts/dataContext';

export const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ReduxProvider>
      <ApolloProvider client={client}>
        <ProfilesProvider>
          <DataContextProvider>
            <Container>
              <Component {...pageProps} />
            </Container>
          </DataContextProvider>
        </ProfilesProvider>
      </ApolloProvider>
    </ReduxProvider>
  );
}
