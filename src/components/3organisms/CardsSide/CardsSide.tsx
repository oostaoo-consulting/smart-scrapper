import React from 'react';
import { useProfilesContext } from '../../../contexts/profilesContext';
import Card from '../../2molecules/Card/Card';

interface CardsSideProps {
  handleOpeningCard: (event: React.MouseEvent<HTMLElement>) => void;
  post: any;
  indexOfFirst: any;
  indexOfLast: any;
}

function CardsSide({
  post,
  indexOfFirst,
  indexOfLast,
  handleOpeningCard,
}: CardsSideProps) {
  // TODO: use profilesContext hooks to get profiles, loading and error
  const { profiles } = useProfilesContext();

  console.log('coucou: ', profiles);

  // if (profiles.length === undefined || null || 0) {
  //   return profiles.map(({ login, location }) => `${login} : ${location}`);
  // }

  if (profiles?.length === undefined || null || 0) {
    return <p>pas de cartes</p>;
  }

  return post
    .slice(indexOfFirst, indexOfLast)
    .map((id: number) => (
      <Card
        key={id}
        handleOpeningCard={handleOpeningCard}
        isFavorite={false}
        profiles={profiles}
      />
    ));
}

export default CardsSide;
