import React from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';
import Input from '../../1atoms/Input/Input';
import Button from '../../1atoms/Button/Button';

export default function SearchBar() {
  return (
    <form className="w-full flex">
      <Input />
      <Button type="submit" className="p-2"><RxMagnifyingGlass /></Button>
    </form>
  );
}
