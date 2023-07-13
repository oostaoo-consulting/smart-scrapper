import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { MdClose, MdOutlineContentCopy } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import { TfiCheckBox, TfiLayoutWidthFull } from 'react-icons/tfi';

import Title from '../../1atoms/Title/Title';
import Paragraph from '../../1atoms/Paragraph/Paragraph';
import Button from '../../1atoms/Button/Button';
import { DataContext } from '../../../contexts/dataContext';

interface CardDetailsprops {
  isSaved: boolean;
  handleOpeningCard: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function CardDetails({
  isSaved,
  handleOpeningCard,
}: CardDetailsprops): JSX.Element {
  const [copied, setCopied] = useState<string>('');
  const { miscData } = useContext(DataContext);
  const person = miscData.currentProfile;

  const cross = <ImCross color="red" />;

  return (
    <>
      <Button
        className="fixed top-0 left-0 w-screen h-screen bg-black cursor-default opacity-80"
        onClick={handleOpeningCard}
        disabled={false}
      >
        .
      </Button>

      <dialog
        open
        className="absolute top-0 flex flex-col w-11/12 max-h-full gap-3 p-3 overflow-y-auto bg-white border border-slate-400"
        data-testid="card"
      >
        <section className="flex">
          <Image
            src="/img/imagePlaceholder.png"
            alt="Card's image"
            width={60}
            height={60}
            className="mr-4 rounded"
          />
          <div>
            <Title level={3}>{person.login}</Title>
            <Title level={2}>{person.name}</Title>
          </div>
        </section>

        <Title level={3}><span className="border-b border-black">LOCALISATION</span></Title>
        <Paragraph text={`${person?.location ? person?.location : cross}`} />

        <Title level={3}><span className="border-b border-black">LIENS</span></Title>
        <div className="flex flex-col">
          <a
            href={person?.websiteUrl && person?.websiteUrl.includes('http', 0) ? person?.websiteUrl : `https://${person?.websiteUrl}`}
            target="_blank"
            className={`text-red-600 hover:text-red-800 flex items-center ${!person?.websiteUrl && 'pointer-events-none'}`}
            rel="noreferrer"
          >
            <span className="text-neutral-600  mr-2">Site:</span>
            {person?.websiteUrl ? person?.websiteUrl : cross}
          </a>

          <a
            href={person?.url ? person?.url : '#'}
            target="_blank"
            className={`text-red-600 hover:text-red-800 flex items-center ${!person?.url && 'pointer-events-none'}`}
            rel="noreferrer"
          >
            <span className="text-neutral-600  mr-2">Github:</span>
            {person?.url ? person?.url : cross}
          </a>

          <div className="flex items-center justify-start gap-4">

            <a
              href={person?.email ? `maito:${person?.email}` : '#'}
              target="_blank"
              className={`text-red-600 hover:text-red-800 flex items-center ${!person?.email && 'pointer-events-none'}`}
              rel="noreferrer"
            >
              <span className="text-neutral-600  mr-2">Email:</span>
              {person?.email ? person?.email : cross}
            </a>

            {person?.email && (
              <Button
                className="relative"
                onClick={(): void => {
                  navigator.clipboard.writeText(person?.email).then(() => {
                    setCopied('Copié !');
                    setTimeout(() => {
                      setCopied('');
                    }, 500);
                  }, () => {
                    setCopied('Erreur copie...');
                    setTimeout(() => {
                      setCopied('');
                    }, 500);
                  });
                }}
                disabled={false}
              >
                <MdOutlineContentCopy
                  className="hover:text-neutral-900"
                  size={20}
                />
                <span className={`absolute w-max left-6 top-0 text-xs ${copied === 'Copié !' ? 'text-green-600' : 'text-red-600'}`}>
                  {copied}
                </span>
              </Button>
            )}
          </div>
        </div>

        <Title level={3}><span className="border-b border-black">BIOGRAPHIE</span></Title>
        {person?.bio ? <Paragraph text={person?.bio} /> : cross}

        <Title level={3}><span className="border-b border-black">RESEAUX SOCIAUX</span></Title>

        {person.socialAccounts.map((account: PersonSocialAccount) => (
          <a
            key={account.displayName + account.provider + account.url}
            className=""
            href={account.url}
          >
            {`${account.provider === 'GENERIC' ? 'AUTRE' : account.provider} : ${account.displayName}`}
          </a>
        ))}

        <div className="absolute top-3 right-3 flex flex-col items-center gap-3">
          <Button className="" onClick={handleOpeningCard}>
            <MdClose size={36} aria-label="close button" />
          </Button>
          <Button onClick={(): void => { }} className="">
            {isSaved ? (
              <TfiCheckBox size={25} />
            ) : (
              <TfiLayoutWidthFull size={21} />
            )}
          </Button>
        </div>
      </dialog>
    </>
  );
}
