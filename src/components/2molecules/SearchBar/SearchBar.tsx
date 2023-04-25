import React from 'react';
import Input from '../../1atoms/Input/Input';
import SearchButton from '../../1atoms/SearchButton/SearchButton';

export default function SearchBar() {
  return (
    <form className="w-full flex">
      <Input />
      <SearchButton />
    </form>
  );
}
