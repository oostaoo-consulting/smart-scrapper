import React from 'react';
import Head from 'next/head';
import SearchSide from '../components/3organisms/SearchSide/SearchSide';
import CardsSide from '../components/3organisms/CardsSide/CardsSide';

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Scrapper</title>
        <meta name="description" content="Site de scrapping signé Oostaoo pour les recherches de profils à recruter" />
      </Head>

      <main className="">
        <aside className="flex flex-col">
          <SearchSide />
        </aside>
        <aside className="flex flex-col gap-8">
          <CardsSide />
        </aside>
      </main>
    </>
  );
}
