import React from 'react';
import { MdSave, MdFavorite } from 'react-icons/md';
import Button from '../../1atoms/Button/Button';

interface NavBarProps {
  className: string;
  handleTabs: Function;
}

export default function NavBar({
  className,
  handleTabs,
}: NavBarProps): JSX.Element {
  return (
    <nav className={className}>
      <Button className="" onClick={(): void => handleTabs('favorite')}>
        <MdFavorite size={36} />
      </Button>
      <Button className="" onClick={(): void => handleTabs('search')}>
        <MdSave size={36} />
      </Button>
    </nav>
  );
}
