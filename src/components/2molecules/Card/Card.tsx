import React, { useContext, useState } from 'react';
import Image from 'next/image';

import { TfiCheckBox, TfiLayoutWidthFull } from 'react-icons/tfi';
import { FiLink } from 'react-icons/fi';
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillFacebook,
} from 'react-icons/ai';
import { BsFillInfoSquareFill, BsMastodon, BsInstagram } from 'react-icons/bs';
import { MdOutlineContentCopy } from 'react-icons/md';

import Title from '../../1atoms/Title/Title';
import Paragraph from '../../1atoms/Paragraph/Paragraph';
import Button from '../../1atoms/Button/Button';
import SocialIcon from '../../1atoms/SocialIcon/SocialIcon';
import { DataContext } from '../../../contexts/dataContext';

interface CardProps {
  isFavorite: boolean;
  handleOpeningCard: (event: React.MouseEvent<HTMLElement>) => void;
  profil: Person;
  isCardsSide: boolean;
}

export default function Card({
  isFavorite,
  handleOpeningCard,
  profil,
  isCardsSide,
}: CardProps): JSX.Element {
  const [copied, setCopied] = useState<string>('');
  const { miscData, setMiscData } = useContext(DataContext);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setMiscData({
      ...miscData,
      currentProfile: profil,
    });
    handleOpeningCard(event);
  };

  // Function to make the "copie" string
  const handleCopyLink = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(profil?.email);
      setCopied('Copié !');
    } catch (error) {
      setCopied('Erreur copie...');
    }
    setTimeout(() => {
      setCopied('');
    }, 500);
  };

  return (
    <article
      key={profil?.id}
      className={`relative flex flex-col h-fit w-full ${isCardsSide ? 'xl:w-full' : 'xl:w-[calc(50%-0.5rem)]'}  gap-3 p-3 mb-1 text-left border hover:bg-neutral-100 border-slate-400`}
      data-testid="card"
    >
      <div className="flex items-start">
        {!isFavorite && (
          <Image
            src="/img/imagePlaceholder.png"
            alt="Card's image"
            width={60}
            height={60}
            className="mr-4 rounded h-"
          />
        )}

        <div>
          <Title level={!isFavorite ? 4 : 3}>{profil?.login}</Title>
          <div className="flex items-center justify-start gap-4">
            <Title level={!isFavorite ? 3 : 2}>{profil?.name}</Title>
            {!isFavorite && (
              <Button className="" onClick={handleClick} disabled={false}>
                <BsFillInfoSquareFill size={25} />
              </Button>
            )}
          </div>

          {!isFavorite && (
            <div className="flex flex-col">
              {profil?.websiteUrl && (
                <a
                  href={profil?.websiteUrl.includes('http', 0) ? profil?.websiteUrl : `https://${profil?.websiteUrl}`}
                  target="_blank"
                  className="text-red-600 hover:text-red-800"
                  rel="noreferrer"
                >
                  <span className="text-neutral-600">Site:</span>{' '}
                  {profil?.websiteUrl}
                </a>
              )}

              {profil?.url && (
                <a
                  href={profil?.url}
                  target="_blank"
                  className="text-red-600 hover:text-red-800"
                  rel="noreferrer"
                >
                  <span className="text-neutral-600">Github:</span> {profil?.url}
                </a>
              )}

              <div className="flex items-center justify-start gap-4">
                {profil?.email && (
                  <a
                    href={`maito:${profil?.email}`}
                    target="_blank"
                    className="text-red-600 hover:text-red-800"
                    rel="noreferrer"
                  >
                    <span className="text-neutral-600">Email:</span>{' '}
                    {profil?.email}
                  </a>
                )}

                {profil?.email && (
                  <Button
                    className="relative"
                    onClick={handleCopyLink}
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
          )}
        </div>
      </div>
      {!isFavorite && <Paragraph text={profil?.bio} />}

      <Button
        onClick={(): void => { }}
        className="absolute top-3 right-3"
        disabled={false}
      >
        {isFavorite ? (
          <TfiCheckBox size={25} />
        ) : (
          <TfiLayoutWidthFull size={21} />
        )}
      </Button>
      {
        !isFavorite && (
          <div className="absolute flex gap-2 right-12 top-3">
            {profil?.socialAccounts.map((socialAccount: PersonSocialAccount) => {
              let icon;
              switch (socialAccount.provider) {
                case 'TWITTER':
                  icon = <AiOutlineTwitter size={25} color="#84c4fd" />;
                  break;
                case 'LINKEDIN':
                  icon = <AiFillLinkedin size={25} color="#0080f1" />;
                  break;
                case 'MASTODON':
                  icon = <BsMastodon size={22} color="#7b4eb8" />;
                  break;
                case 'INSTAGRAM':
                  icon = <BsInstagram size={22} color="#FF2E3A" />;
                  break;
                case 'FACEBOOK':
                  icon = <AiFillFacebook size={22} color="#1A77F2" />;
                  break;
                case 'GENERIC': // user:mlabouardy
                  icon = <FiLink size={22} />;
                  break;
                default:
                  icon = <FiLink size={22} />;
                  break;
              }

              if (icon) {
                return (
                  <SocialIcon
                    key={socialAccount.displayName}
                    url={socialAccount?.url}
                    className=""
                    icon={icon}
                  />
                );
              }
              return null;
            })}
          </div>
        )
      }
    </article>
  );
}
