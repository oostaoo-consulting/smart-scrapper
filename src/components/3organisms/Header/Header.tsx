import Image from 'next/image';
import React from 'react';
import Title from '../../1atoms/Title/Title';

export default function Header(): JSX.Element {
  return (
    <header className="pb-6 h-24 sm:h-36 xl:w-1/2 xl:pr-2 bg-white flex items-center justify-between sticky top-0">
      <Image
        src="/img/logo-oostaoo.png"
        alt="Card's image"
        width={318}
        height={235}
        className="w-1/4 sm:w-fit sm:h-full"
      />
      <Title level={1}>
        Oostaoo Consulting <br /> Smart Scrapper
      </Title>
    </header>
  );
}
