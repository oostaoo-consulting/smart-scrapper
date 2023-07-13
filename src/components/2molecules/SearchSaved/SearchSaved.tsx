import React from 'react';
import { ImCross } from 'react-icons/im';
import { useProfilesContext } from '../../../contexts/profilesContext';

import Button from '../../1atoms/Button/Button';
import { deleteSearchSaved } from '../../../requests/searchSaved';

interface SearchSavedType {
  handleTabs: (tab: string) => void,
  setInputLocationValue: (value: string) => void,
  setInputSearchValue: (value: string) => void,
  fetchDataSearches: () => Promise<void>,
  searchSaved: {
    id: number
    date: string
    location: string,
    terms: string,
  },
}

export default function SearchSaved(
  { fetchDataSearches, searchSaved, handleTabs, setInputLocationValue, setInputSearchValue }
    : SearchSavedType,
): JSX.Element {
  const { loadData } = useProfilesContext();

  const handleClick = (): void => {
    handleTabs('noTab');
    setInputLocationValue(searchSaved.location);
    setInputSearchValue(searchSaved.terms);
    loadData({
      variables: {
        location: searchSaved.location,
        searchTerms: searchSaved.terms,
      },
    });
  };

  const handleDeleteClick = async (): Promise<void> => {
    await deleteSearchSaved(searchSaved.id);
    await fetchDataSearches();
  };

  const formattedDate = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(searchSaved.date));

  return (
    <article className="relative flex flex-col w-full xl:w-[calc(50%-0.5rem)] gap-3 h-fit mb-1 border hover:bg-neutral-100 border-slate-400">
      <Button onClick={handleDeleteClick} className="absolute top-3 right-3"><ImCross color="red" /></Button>
      <Button onClick={handleClick} className="text-left p-3">
        <p className="text-xs">{formattedDate}</p>
        <section className="flex flex-col w-full">
          <p><span className="italic">Localisation :</span> {searchSaved.location}</p>
          <p><span className="italic">Recherche :</span> {searchSaved.terms}</p>
        </section>
      </Button>
    </article>
  );
}
