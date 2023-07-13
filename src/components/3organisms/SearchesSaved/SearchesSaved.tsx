import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SearchSaved from '../../2molecules/SearchSaved/SearchSaved';
import { getSearchesSaved } from '../../../requests/searchSaved';

interface SearchesSavedPropsType {
  handleTabs: (tab: string) => void
  setInputLocationValue: (value: string) => void,
  setInputSearchValue: (value: string) => void,
}

export default function SearchesSaved(
  { handleTabs, setInputLocationValue, setInputSearchValue }
    : SearchesSavedPropsType,
): JSX.Element {
  const [searchesSaved, setSearchesSaved] = useState([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await getSearchesSaved();

      setSearchesSaved(response.data);
    };

    fetchData();
  }, []);

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
