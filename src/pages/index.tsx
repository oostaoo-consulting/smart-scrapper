import React, { useState } from 'react';
import Head from 'next/head';
import { MdClose } from 'react-icons/md';
import CardsSide from '../components/3organisms/CardsSide/CardsSide';
import Search from '../components/3organisms/Search/Search';
import Favorites from '../components/3organisms/Favorites/Favorites';
import NavBar from '../components/2molecules/NavBar/NavBar';
import Button from '../components/1atoms/Button/Button';
import SearchesSaved from '../components/3organisms/SearchesSaved/SearchesSaved';
import Pagination from '../components/2molecules/Pagination/Pagination';

export default function Home() {
  const [tabs, setTabs] = useState(0);

  const [post] = useState<number>(7);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage] = useState<number>(5);
  const allPosts = Array.from({ length: post });

  const handleTabs: (tab: string) => void = (tab: string): void => {
    if (tab === 'noTab') {
      setTabs(0);
    }
    if (tab === 'favorite') {
      if (tabs !== 1) {
        setTabs(1);
      }
      if (tabs === 1) {
        setTabs(0);
      }
    }
    if (tab === 'search') {
      if (tabs !== 2) {
        setTabs(2);
      }
      if (tabs === 2) {
        setTabs(0);
      }
    }
  };

  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Head>
        <title>Smart Scrapper</title>
        <meta
          name="description"
          content="Site de scrapping signé Oostaoo pour les recherches de profils à recruter"
        />
      </Head>

      <main className="relative xl:flex">
        <section className=" xl:w-1/2 xl:pr-2">
          <section
            className={`${tabs !== 0 && 'hidden xl:flex'} flex flex-col h-28`}
          >
            <Search />
          </section>
          <aside
            className={`
            ${tabs !== 0 && 'hidden'} 
            flex
            flex-col
            gap-4
            overflow-y-scroll
            h-[calc(100vh-(6rem+7rem)-2rem-4rem)]
            sm:h-[calc(100vh-(9rem+7rem)-2rem-4rem)]
    
            {/* calc : 100vh - (Header + Search) - 2 * Padding Body - NavBar */}
    
            
            xl:flex
            
            xl:relative 
            xl:overflow-y-scroll
            `}
          >
            <CardsSide
              post={allPosts}
              indexOfFirst={indexOfFirst}
              indexOfLast={indexOfLast}
            />
          </aside>
          <section>
            <Pagination
              paginate={paginate}
              totalPost={post}
              postPerPage={postPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </section>
        </section>

        <section className="xl:flex xl:flex-col xl:relative xl:gap-4 xl:w-1/2 xl:h-[calc(100vh-2rem-4rem)] ">
          <nav className="hidden w-full xl:flex xl:justify-around xl:absolute xl:-top-36 xl:pl-2">
            <Button
              className={`text-2xl border border-slate-400 grow ${
                tabs === 1 ? 'border-b-0 border-r-0' : ''
              }`}
              onClick={() => handleTabs('favorite')}
            >
              FAVORIS
            </Button>
            <Button
              className={`text-2xl border border-slate-400 grow ${
                tabs === 2 ? 'border-b-0 border-l-0' : ''
              }`}
              onClick={() => handleTabs('search')}
            >
              RECHERCHES
            </Button>
          </nav>
          <Button
            className={`absolute top-0 right-0 xl:hidden ${
              tabs === 0 ? ' hidden' : ''
            }`}
            data-testid="close-button"
            onClick={() => handleTabs('noTab')}
          >
            <MdClose size={36} />
          </Button>
          <main
            data-testid="toggle-section"
            className={`
            ${tabs === 0 && 'hidden'}
            flex 
            flex-col 
            gap-4
            absolute
            top-0
            w-full
            mt-9
            h-[calc(100vh-(6rem)-2rem-4rem-2.25rem)] 
            sm:h-[calc(100vh-(9rem)-2rem-4rem-2.25rem)] 
            overflow-scroll 
            
            xl:absolute
            xl:right-0
            xl:-top-24
            xl:pl-2

            xl:mt-0 
            xl:w-full
            xl:h-[calc(100vh-4rem-1rem)]
            `}
          >
            {tabs === 1 && <Favorites />}
            {tabs === 2 && <SearchesSaved />}
          </main>
        </section>
        <NavBar
          handleTabs={handleTabs}
          className="bottom-0 left-0 flex w-full h-16 bg-white border-t  border-slate-400 justify-evenly xl:hidden"
        />
      </main>
    </>
  );
}
