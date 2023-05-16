import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Container from '../components/Container/Container';

export const client = new ApolloClient({
  uri: process.env.URI,
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ApolloProvider>
  );
}
