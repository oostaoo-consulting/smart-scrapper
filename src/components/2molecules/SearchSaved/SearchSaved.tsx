import React from 'react';
import { useProfilesContext } from '../../../contexts/profilesContext';

import Title from '../../1atoms/Title/Title';
import Button from '../../1atoms/Button/Button';

interface LocalStorageType {
  handleTabs: (tab: string) => void,
  setInputLocationValue: (value: string) => void,
  setInputSearchValue: (value: string) => void,
  localStorage: [string, {
    location: string,
    search: string,
  },
  ]
}

export default function SearchSaved(
  { localStorage, handleTabs, setInputLocationValue, setInputSearchValue }
    : LocalStorageType,
): JSX.Element {
  const { loadData } = useProfilesContext();

  const dateSearch = localStorage[0];
  const valuesSearch = localStorage[1];

  const handleClick = (): void => {
    handleTabs('noTab');
    setInputLocationValue(valuesSearch.location);
    setInputSearchValue(valuesSearch.search);
    loadData({
      variables: {
        location: valuesSearch.location,
        searchTerms: valuesSearch.search,
      },
    });
  };

  return (
    <article className="relative flex flex-col w-full xl:w-[calc(50%-0.5rem)] gap-3 h-fit p-3 mb-1 text-left border hover:bg-neutral-100 border-slate-400">
      <Button onClick={handleClick} className="">
        <Title level={3}>{dateSearch}</Title>
        <section className="flex flex-col items-center w-full">
          <p>Localisation : {valuesSearch.location}</p>
          <p>Recherche : {valuesSearch.search}</p>
        </section>
      </Button>
    </article>
  );
}
