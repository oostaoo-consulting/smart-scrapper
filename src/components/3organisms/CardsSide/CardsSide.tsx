import React from 'react';
import Card from '../../2molecules/Card/Card';

interface CardsSideProps {
  handleOpeningCard: (event: React.MouseEvent<HTMLElement>) => void
}

export default function CardsSide({ handleOpeningCard }: CardsSideProps) {
  return (
    <>
      <Card handleOpeningCard={handleOpeningCard} isFavorite={false} />
      <Card handleOpeningCard={handleOpeningCard} isFavorite={false} />
      <Card handleOpeningCard={handleOpeningCard} isFavorite={false} />
      <Card handleOpeningCard={handleOpeningCard} isFavorite={false} />
      <Card handleOpeningCard={handleOpeningCard} isFavorite={false} />
      <Card handleOpeningCard={handleOpeningCard} isFavorite={false} />
      <Card handleOpeningCard={handleOpeningCard} isFavorite={false} />
      <Card handleOpeningCard={handleOpeningCard} isFavorite={false} />
    </>
  );
}
