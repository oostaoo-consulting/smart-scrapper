import React from 'react';
import Head from 'next/head';
import CardsSide from '../components/3organisms/CardsSide/CardsSide';
import Search from '../components/3organisms/Search/Search';
import Favorites from '../components/3organisms/Favorites/Favorites';

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Scrapper</title>
        <meta name="description" content="Site de scrapping signé Oostaoo pour les recherches de profils à recruter" />
      </Head>

      <main className="xl:flex xl:relative">
        <section className=" xl:w-1/2 xl:pr-2">
          <section className="flex flex-col h-28">
            <Search />
          </section>
          <section className="hidden xl:flex xl:flex-col xl:gap-4 xl:overflow-y-scroll xl:sm:h-[calc(100vh-(9rem+7rem)-2rem)]">
            <Favorites />
          </section>
        </section>

        <aside className="
        flex
        flex-col
        gap-4
        overflow-y-scroll
        h-[calc(100vh-(6rem+7rem)-2rem)]
        sm:h-[calc(100vh-(9rem+7rem)-2rem)]

        {/* calc : 100vh - (Height Header + Height Search) - 2 * Padding Body */}

        xl:w-1/2 xl:h-[calc(100vh-2rem)]
        xl:absolute
        xl:right-0
        xl:-top-36
        xl:pl-2
        "
        >
          <CardsSide />
        </aside>
      </main>
    </>
  );
}
