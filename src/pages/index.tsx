import React from 'react';
import Head from 'next/head';
import CardsSide from '../components/3organisms/CardsSide/CardsSide';
import Search from '../components/3organisms/Search/Search';

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Scrapper</title>
        <meta name="description" content="Site de scrapping signé Oostaoo pour les recherches de profils à recruter" />
      </Head>

      <main className="">
        <section className="flex flex-col h-28">
          <Search />
        </section>
        <aside className="flex flex-col gap-8 overflow-y-scroll h-[calc(100vh-(6rem+7rem)-2rem)] sm:h-[calc(100vh-(9rem+7rem)-2rem)]">
          {/* calc : 100vh - (Height Header + Height Search) - 2 * Padding Body */}
          <CardsSide />
        </aside>
      </main>
    </>
  );
}
