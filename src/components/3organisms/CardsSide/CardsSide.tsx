import React from 'react';
import { useProfilesContext } from '../../../contexts/profilesContext';
import Card from '../../2molecules/Card/Card';

export default function CardsSide() {
  const { profiles, loading, error } = useProfilesContext();

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {profiles && <p>{profiles.map(({ login, location }) => `${login} : ${location}`)}</p>}

      <Card isFavorite={false} />
      <Card isFavorite={false} />
      <Card isFavorite={false} />
      <Card isFavorite={false} />
      <Card isFavorite={false} />
      <Card isFavorite={false} />
      <Card isFavorite={false} />
      <Card isFavorite={false} />
    </>
  );
}
