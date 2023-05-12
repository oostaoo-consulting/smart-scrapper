import React from 'react';
import { MdSave, MdFavorite } from 'react-icons/md';
import Button from '../../1atoms/Button/Button';

interface NavBarProps {
  className: string;
  handleTabs:(tab: string) => void;
}

export default function NavBar({ className, handleTabs }: NavBarProps) {
  return (
    <nav className={className}>
      <Button className="" onClick={() => handleTabs('favorite')}><MdFavorite size={36} /></Button>
      <Button className="" onClick={() => handleTabs('search')}><MdSave size={36} /></Button>
    </nav>
  );
}
