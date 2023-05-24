import React from 'react';
import { v4 as uuidv4 } from 'uuid';
// import { useProfilesContext } from '../../../contexts/profilesContext';
import Card from '../../2molecules/Card/Card';

interface CardsSideProps {
  handleOpeningCard: (event: React.MouseEvent<HTMLElement>) => void,
  post: any,
  indexOfFirst: any,
  indexOfLast: any,
}

function CardsSide({
  post, indexOfFirst, indexOfLast, handleOpeningCard,
}: CardsSideProps) {
  // TODO: use profilesContext hooks to get profiles, loading and error
  // const { profiles, loading, error } = useProfilesContext();
  // if (profiles) return (profiles.map(({ login, location }) => `${login} : ${location}`));

  return post
    .slice(indexOfFirst, indexOfLast)
    .map(() => (
      <Card
        key={uuidv4()}
        handleOpeningCard={handleOpeningCard}
        isFavorite={false}
      />
    ));
}

export default CardsSide;
