import React from 'react';

import Title from '../../1atoms/Title/Title';
import Button from '../../1atoms/Button/Button';

export default function SearchSaved() {
  return (
    <article className="border-slate-400 border p-3 flex flex-col gap-3 relative">
      <Title level={3}>Nom de la recherche</Title>
      <Button className="break-all">recherche=googlr.frORlinkedInANDWhatever=Justfor a long Search</Button>
    </article>
  );
}
