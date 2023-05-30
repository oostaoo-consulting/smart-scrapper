import React from 'react';
import { useProfilesContext } from '../../../contexts/profilesContext';

import Title from '../../1atoms/Title/Title';
import Button from '../../1atoms/Button/Button';

interface LocalStorageType {
  handleTabs: (tab: string) => void,
  setInputLocationValue: (value: string) => void,
  setInputSearchValue: (value: string) => void,
  localStorage: {
    [key: string]: {
      location: string,
      search: string,
    }
  }
}

export default function SearchSaved(
  { localStorage, handleTabs, setInputLocationValue, setInputSearchValue }
    : LocalStorageType,
): JSX.Element {
  const key = Object.keys(localStorage)[0];
  const { loadData } = useProfilesContext();

  const handleClick = (): void => {
    handleTabs('noTab');
    setInputLocationValue(localStorage[key].location);
    setInputSearchValue(localStorage[key].search);
    loadData({
      variables: {
        location: localStorage[key].location,
        searchTerms: localStorage[key].search,
      },
    });
  };

  return (
    <article className="">
      <Button onClick={handleClick} className="flex flex-col gap-3 relative w-full p-3 border-slate-400 border hover:border-white">
        <Title level={3}>{key}</Title>
        <section className="flex flex-col items-center w-full">
          <p>Localisation : {localStorage[key].location}</p>
          <p>Recherche : {localStorage[key].search}</p>
        </section>
      </Button>
    </article>
  );
}
