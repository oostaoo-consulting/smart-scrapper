import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SearchSaved from '../../2molecules/SearchSaved/SearchSaved';
import getJson from '../../../utils/localStorage';

interface SearchesSavedPropsType {
  handleTabs: (tab: string) => void
  setInputLocationValue: (value: string) => void,
  setInputSearchValue: (value: string) => void,
}

export default function SearchesSaved(
  { handleTabs, setInputLocationValue, setInputSearchValue }
    : SearchesSavedPropsType,
): JSX.Element {
  const [data, setData] = useState([]);

  useEffect(() => {
    const datasLocalStorage = getJson('savedSearch');
    setData(datasLocalStorage);
  }, []);

  return (
    <>
      {data.map((value) => (
        <SearchSaved
          key={uuidv4()}
          localStorage={value}
          handleTabs={handleTabs}
          setInputLocationValue={setInputLocationValue}
          setInputSearchValue={setInputSearchValue}
        />
      ))}
    </>

  );
}
