import React from 'react';
import Title from '../../1atoms/Title';
import SearchButton from '../../1atoms/SearchButton/SearchButton';
import Input from '../../1atoms/Input/Input';

export default function Sidebar() {
  return (
    <>
      <Title level={1} text="Oostaoo Consulting" />
      <Title level={2} text="Smart Scrapper" />
      <Input /><SearchButton />
      {/* <Button /> */}
    </>
  );
}
