import React from 'react';
import { useProfilesContext } from '../../../contexts/profilesContext';
// eslint-disable-next-line import/no-named-as-default
import Card from '../../2molecules/Card/Card';

interface CardsSideProps {
  handleOpeningCard: (event: React.MouseEvent<HTMLElement>) => void;
  indexOfFirst: number;
  indexOfLast: number;
}

function CardsSide({
  indexOfFirst,
  indexOfLast,
  handleOpeningCard,
}: CardsSideProps): JSX.Element {
  const { profiles } = useProfilesContext();

  if (profiles?.length === undefined || null || 0) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div>Pas de cartes disponibles, tape un truc dans les inputs!!</div>
      </div>
    );
  }

  // eslint-disable-next-line arrow-body-style
  const firstProfiles = profiles.filter((_profil, index: number) => {
    return index >= indexOfFirst && index <= indexOfLast;
  });

  return (
    <>
      {firstProfiles.map((profil) => (
        <Card
          key={profil.id}
          handleOpeningCard={handleOpeningCard}
          isFavorite={false}
          profil={profil}
        />
      ))}
    </>
  );
}

export default CardsSide;
