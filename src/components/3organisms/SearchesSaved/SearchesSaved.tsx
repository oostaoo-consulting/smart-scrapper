import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import SearchSaved from '../../2molecules/SearchSaved/SearchSaved';

interface SearchesSavedPropsType {
  handleTabs: (tab: string) => void
  setInputLocationValue: (value: string) => void,
  setInputSearchValue: (value: string) => void,
  fetchDataSearches: () => Promise<void>,
  savedPersons: Person[],
  searchesSaved: {
    id: number
    date: string,
    location: string,
    terms: string,
  }[]
}

export default function SearchesSaved(
  { fetchDataSearches,
    searchesSaved,
    handleTabs,
    setInputLocationValue,
    setInputSearchValue,
    savedPersons }
    : SearchesSavedPropsType,
): JSX.Element {
  return (
    <>
      {searchesSaved.map((searchSaved) => (
        <SearchSaved
          key={uuidv4()}
          fetchDataSearches={fetchDataSearches}
          searchSaved={searchSaved}
          handleTabs={handleTabs}
          setInputLocationValue={setInputLocationValue}
          setInputSearchValue={setInputSearchValue}
          savedPersons={savedPersons}
        />
      ))}
    </>

  );
}
