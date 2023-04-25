import React, { ReactNode } from 'react';
import Header from '../3organisms/Header/Header';

export default function Container({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
