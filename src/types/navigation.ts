import { type FC } from 'react';

export interface NavItem {
  path: string;
  label: string;
  icon: FC<{ className?: string }>;
}