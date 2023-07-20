import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from '../../2molecules/Card/Card';

interface FavoritesType {
  savedPersons: Person[],
  fetchDataProfiles: () => void,
}

export default function Favorites({ savedPersons, fetchDataProfiles }: FavoritesType): JSX.Element {
  return (
    <>
      {savedPersons.map((value) => (
        <Card
          key={uuidv4()}
          profil={value}
          handleOpeningCard={(): void => { }}
          isSaved
          isCardsSide={false}
          fetchDataProfiles={fetchDataProfiles}
        />

      ))}
    </>

  );
}
