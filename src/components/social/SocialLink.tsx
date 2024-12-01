import React from 'react';
import { type FC } from 'react';

interface Props {
  icon: FC<{ className?: string }>;
  href: string;
  label: string;
}

export const SocialLink: React.FC<Props> = ({ icon: Icon, href, label }) => (
  <a
    href={href}
    className="hover:text-blue-400 transition-colors"
    aria-label={label}
  >
    <Icon className="h-5 w-5" />
  </a>
);