import React from 'react';
import MainButton from '../../1atoms/MainButton/MainButton';
import SearchBar from '../../2molecules/SearchBar/SearchBar';

export default function Search() {
  return (
    <>
      <SearchBar />
      <MainButton text="Enregistrer vos recherches" />
    </>
  );
}
