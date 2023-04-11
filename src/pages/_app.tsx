import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

require('dotenv').config();

export const client = new ApolloClient({
  uri: process.env.URI,
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}
