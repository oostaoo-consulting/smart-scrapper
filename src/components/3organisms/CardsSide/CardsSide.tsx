import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import Card from '../../2molecules/Card/Card';

function CardsSide({ post, indexOfFirst, indexOfLast }: any) {
  return post
    .slice(indexOfFirst, indexOfLast)
    .map((id) => <Card key={id} isFavorite={false} />);
}

export default CardsSide;
