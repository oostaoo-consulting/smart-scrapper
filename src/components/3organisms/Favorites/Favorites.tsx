import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from '../../2molecules/Card/Card';

interface FavoritesType {
  cards: Person[],
  setCards: (value: Person[]) => void,
}

export default function Favorites({ cards, setCards }: FavoritesType): JSX.Element {
  return (
    <>
      {cards.map((value) => (
        <Card
          key={uuidv4()}
          profil={value}
          handleOpeningCard={(): void => { }}
          isSaved
          isCardsSide={false}
          setCards={setCards}
        />

      ))}
    </>

  );
}
