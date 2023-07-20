import React from 'react';
import { useProfilesContext } from '../../../contexts/profilesContext';
// eslint-disable-next-line import/no-named-as-default
import Card from '../../2molecules/Card/Card';

interface CardsSideProps {
  handleOpeningCard: (event: React.MouseEvent<HTMLElement>) => void;
  indexOfFirst: number;
  indexOfLast: number;
  isCardsSide: boolean;
  fetchDataProfiles: () => void,
  savedPersons: Person[]
}

function CardsSide({
  indexOfFirst,
  indexOfLast,
  handleOpeningCard,
  isCardsSide,
  fetchDataProfiles,
  savedPersons,
}: CardsSideProps): JSX.Element {
  const { profiles = [] } = useProfilesContext();

  if (profiles.length === (undefined || null || 0)) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div>Pas de profils disponibles</div>
      </div>
    );
  }

  // eslint-disable-next-line arrow-body-style
  const firstProfiles = profiles.filter((_profil, index: number) => {
    return index >= indexOfFirst && index <= indexOfLast;
  });

  return (
    <>
      {firstProfiles.map((profil) => {
        const findSavedPerson = savedPersons.find((savedPerson) => (
          savedPerson.login === profil.login
        ));
        return (
          <Card
            key={profil.id}
            handleOpeningCard={handleOpeningCard}
            isSaved={!!findSavedPerson}
            profil={profil}
            isCardsSide={isCardsSide}
            fetchDataProfiles={fetchDataProfiles}
          />
        );
      })}
    </>
  );
}

export default CardsSide;
