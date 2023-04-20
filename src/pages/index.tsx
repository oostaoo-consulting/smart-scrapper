import React from 'react';
import Head from 'next/head';
import Sidebar from '../components/3organisms/Sidebar/Sidebar';
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

      <main className="flex flex-row md:flex-col h-screen justify-center items-center bg-zinc-300">
        <aside>
          <Sidebar />
        </aside>
        <Cards />
      </main>
    </>
  );
}
