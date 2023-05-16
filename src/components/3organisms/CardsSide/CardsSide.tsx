import React from 'react';
import Card from '../../2molecules/Card/Card';

function CardsSide({ post, indexOfFirst, indexOfLast }: any) {
  return post
    .slice(indexOfFirst, indexOfLast)
    .map((id: number) => <Card key={id} isFavorite={false} />);
}

export default CardsSide;
