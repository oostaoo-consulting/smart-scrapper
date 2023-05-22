import React from 'react';
import { MdSave, MdFavorite } from 'react-icons/md';
import Button from '../../1atoms/Button/Button';

interface NavBarProps {
  className: string;
  handleTabs: (tab: string) => void;
}

export default function NavBar({
  className,
  handleTabs,
}: NavBarProps): JSX.Element {
  return (
    <nav className={className}>
      <Button
        disabled={false}
        className=""
        onClick={(): void => handleTabs('favorite')}
      >
        <MdFavorite size={36} />
      </Button>
      <Button
        disabled={false}
        className=""
        onClick={(): void => handleTabs('search')}
      >
        <MdSave size={36} />
      </Button>
    </nav>
  );
}
