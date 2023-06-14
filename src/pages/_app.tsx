import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ProfilesProvider from '../contexts/profilesContext';
import Container from '../components/Container/Container';
import ReduxProvider from '../redux/provider';

export const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ReduxProvider>
      <ApolloProvider client={client}>
        <ProfilesProvider>
          <Container>
            <Component {...pageProps} />
          </Container>
        </ProfilesProvider>
      </ApolloProvider>
    </ReduxProvider>
  );
}
