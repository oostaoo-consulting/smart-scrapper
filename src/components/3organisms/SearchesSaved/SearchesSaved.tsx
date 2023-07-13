import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import SearchSaved from '../../2molecules/SearchSaved/SearchSaved';

interface SearchesSavedPropsType {
  handleTabs: (tab: string) => void
  setInputLocationValue: (value: string) => void,
  setInputSearchValue: (value: string) => void,
  searchesSaved: {
    date: string,
    location: string,
    terms: string,
  }[]
}

export default function SearchesSaved(
  { searchesSaved, handleTabs, setInputLocationValue, setInputSearchValue }
    : SearchesSavedPropsType,
): JSX.Element {
  return (
    <>
      {searchesSaved.map((searchSaved) => (
        <SearchSaved
          key={uuidv4()}
          searchSaved={searchSaved}
          handleTabs={handleTabs}
          setInputLocationValue={setInputLocationValue}
          setInputSearchValue={setInputSearchValue}
        />
      ))}
    </>

  );
}
