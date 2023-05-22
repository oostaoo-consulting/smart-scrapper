import React from 'react';
// import { useProfilesContext } from '../../../contexts/profilesContext';
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
}: CardsSideProps): JSX.Element {
  // TODO: use profilesContext hooks to get profiles, loading and error
  // const { profiles, loading, error } = useProfilesContext();
  // if (profiles) return (profiles.map(({ login, location }) => `${login} : ${location}`));

  return post
    .slice(indexOfFirst, indexOfLast)
    .map((id: number) => (
      <Card key={id} handleOpeningCard={handleOpeningCard} isFavorite={false} />
    ));
}

export default CardsSide;
