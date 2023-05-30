import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import SearchSaved from '../../2molecules/SearchSaved/SearchSaved';

interface SearchesSavedPropsType {
  handleTabs: (tab: string) => void
  setInputLocationValue: (value: string) => void,
  setInputSearchValue: (value: string) => void,
}
interface LocalStorageType {
  [key: string]: {
    location: string,
    search: string,
  }
}

export default function SearchesSaved(
  { handleTabs, setInputLocationValue, setInputSearchValue }
    : SearchesSavedPropsType,
): JSX.Element {
  const localStorageSavedSearch = localStorage.getItem('savedSearch');
  const datasLocalStorage = localStorageSavedSearch ? JSON.parse(localStorageSavedSearch) : [];

  return (
    datasLocalStorage.map((localStorage: LocalStorageType) => (
      <SearchSaved
        key={uuidv4()}
        localStorage={localStorage}
        handleTabs={handleTabs}
        setInputLocationValue={setInputLocationValue}
        setInputSearchValue={setInputSearchValue}
      />
    ))

  );
}
