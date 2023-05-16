import React from 'react';

export default function Input(): JSX.Element {
  return (
    <input
      type="text"
      placeholder="Recherche"
      name="inputSearch"
      className="px-3 py-1 bg-gray-100 grow"
    />
  );
}
