import React from 'react';

type SocialIconPropsKey = Pick<GithubAPIProfileSocialAccount, 'displayName'>;

interface SocialIconProps extends Pick<GithubAPIProfileSocialAccount, 'url'> {
  key: SocialIconPropsKey['displayName'];
  className: string;
  icon: JSX.Element;
}

export default function SocialIcon({
  key,
  url,
  className = '',
  icon,
}: SocialIconProps): JSX.Element {
  return (
    <a key={key} href={url} className={className}>
      {icon}
    </a>
  );
}
