import Image from 'next/image';
import React from 'react';
import Title from '../../1atoms/Title/Title';

export default function Header() {
  return (
    <header className="pb-6 sticky top-0 bg-white">
      <Image
        src="/img/logo-oostaoo.jpeg"
        alt="Card's image"
        width={150}
        height={150}
      />
      <Title level={1} text="Oostaoo Consulting" />
      <Title level={1} text="Smart Scrapper" />
    </header>

  );
}
