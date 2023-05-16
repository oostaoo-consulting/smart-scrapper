import React from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';
import Input from '../../1atoms/Input/Input';
import Button from '../../1atoms/Button/Button';

export default function SearchBar(): JSX.Element {
  return (
    <form className="w-full flex">
      <Input />
      <Button className="p-2">
        <RxMagnifyingGlass />
      </Button>
    </form>
  );
}
