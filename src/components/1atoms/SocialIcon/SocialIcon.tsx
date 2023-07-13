import React from 'react';

interface SocialIconProps extends Pick<GithubAPIProfileSocialAccount, 'url'> {
  className: string;
  icon: JSX.Element;
}

export default function SocialIcon({
  url,
  className = '',
  icon,
}: SocialIconProps): JSX.Element {
  return (
    <a href={url} className={className}>
      {icon}
    </a>
  );
}
