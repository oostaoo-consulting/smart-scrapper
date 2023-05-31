import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { MdClose } from 'react-icons/md';
import CardsSide from '../components/3organisms/CardsSide/CardsSide';
import Search from '../components/3organisms/Search/Search';
import Favorites from '../components/3organisms/Favorites/Favorites';
import NavBar from '../components/2molecules/NavBar/NavBar';
import Button from '../components/1atoms/Button/Button';
import SearchesSaved from '../components/3organisms/SearchesSaved/SearchesSaved';
import Pagination from '../components/2molecules/Pagination/Pagination';
import CardDetails from '../components/2molecules/CardDetails/CardDetails';

import jsonMock from '../components/2molecules/CardDetails/mock.json';
import { useProfilesContext } from '../contexts/profilesContext';

export default function Home(): JSX.Element {
  const { profiles } = useProfilesContext();

  const [tabs, setTabs] = useState<number>(0);
  const [openCard, setOpenCard] = useState<boolean>(false);

  const [post, setPost] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage] = useState<number>(15);

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

  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  const handleOpeningCard = (): void => {
    setOpenCard(!openCard);
  };

  useEffect(() => {
    setPost(profiles?.length as any);
  }, [profiles]);

  return (
    <>
      <Head>
        <title>Smart Scrapper</title>
        <meta
          name="description"
          content="Site de scrapping signé Oostaoo pour les recherches de profils à recruter"
        />
      </Head>

      <main className="relative xl:flex xl:h-[calc(100vh-9rem-2rem)]">
        <section data-testid="cardSideSection" className=" xl:w-1/2 xl:pr-2">
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
            h-[calc(100vh-(6rem+7rem)-1rem-4rem-3.5rem)]
            sm:h-[calc(100vh-(9rem+7rem)-1rem-4rem-3.5rem)]
    
            //calc : 100vh - (Header + Search) - 2 * Padding Body - NavBar
    
            
            xl:flex
            xl:h-[calc(100vh-(6rem+7rem)-1rem-4rem-3.5rem)]
            xl:relative 
            xl:overflow-y-scroll
            `}
          >
            <CardsSide
              indexOfFirst={indexOfFirst}
              indexOfLast={indexOfLast}
              handleOpeningCard={handleOpeningCard}
            />
          </aside>

          <section>
            {(profiles?.length !== undefined || null) && (
              <Pagination
                tabs={tabs}
                paginate={paginate}
                totalPost={post}
                postPerPage={postPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            )}
          </section>
        </section>

        <section
          data-testid="favoriteAndSearchSection"
          className="xl:flex xl:flex-col xl:relative xl:gap-4 xl:w-1/2 xl:h-[calc(100vh-2rem-4rem-5rem)] "
        >
          <nav className="hidden w-full xl:flex xl:justify-around xl:absolute xl:-top-36 xl:pl-2">
            <Button
              className={`text-2xl border border-slate-400 grow ${
                tabs === 1 ? 'border-b-0 border-r-0' : ''
              }`}
              onClick={(): void => handleTabs('favorite')}
              disabled={false}
            >
              FAVORIS
            </Button>
            <Button
              className={`text-2xl border border-slate-400 grow ${
                tabs === 2 ? 'border-b-0 border-l-0' : ''
              }`}
              onClick={(): void => handleTabs('search')}
              disabled={false}
            >
              RECHERCHES
            </Button>
          </nav>
          <Button
            className={`absolute top-0 right-0 xl:hidden ${
              tabs === 0 ? ' hidden' : ''
            }`}
            onClick={(): void => handleTabs('noTab')}
            disabled={false}
          >
            <MdClose size={36} aria-label="close button" />
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
            overflow-y-scroll 
            
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
          className="fixed bottom-0 left-0 flex w-full h-16 bg-white border-t border-slate-400 justify-evenly xl:hidden"
        />
        {openCard && (
          <CardDetails
            person={jsonMock}
            isFavorite={false}
            handleOpeningCard={handleOpeningCard}
          />
        )}
      </main>
    </>
  );
}
