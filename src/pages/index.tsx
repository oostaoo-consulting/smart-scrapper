import React from 'react';
import Head from 'next/head';
import Cards from '../components/3organisms/Cards/Cards';

export default function Home() {
  return (
    <>
      <Head>
        {' '}
        {/* !!! toChange x2 !!! */}
        <title>!!! Title to change !!!</title>
        <meta name="description' content='!!! Description to change !!!" />
      </Head>

      <main className="h-screen flex justify-center items-center">
        Hello
        <Cards />
      </main>
    </>
  );
}
