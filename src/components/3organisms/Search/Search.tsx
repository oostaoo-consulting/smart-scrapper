import React from 'react';
import MainButton from '../../1atoms/MainButton/MainButton';
import SearchBar from '../../2molecules/SearchBar/SearchBar';

interface SearchpropsType {
  handleSaveSearchClick: () => void,
  inputLocationValue: string,
  setInputLocationValue: (value: string) => void,
  inputSearchValue: string,
  setInputSearchValue: (value: string) => void
}

export default function Search({
  handleSaveSearchClick,
  inputLocationValue,
  setInputLocationValue,
  inputSearchValue,
  setInputSearchValue,
}: SearchpropsType): JSX.Element {
  return (
    <>
      <SearchBar
        inputLocationValue={inputLocationValue}
        setInputLocationValue={setInputLocationValue}
        inputSearchValue={inputSearchValue}
        setInputSearchValue={setInputSearchValue}
      />
      <MainButton
        handleSaveSearchClick={handleSaveSearchClick}
        text="Enregistrer vos recherches"
      />
    </>
  );
}
