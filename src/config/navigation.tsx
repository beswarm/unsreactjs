import { HomeIcon, InfoIcon, PhoneIcon } from '../components/icons';
import type { NavItem } from '../types/navigation';

export const navigationItems: NavItem[] = [
  {
    path: '/',
    label: 'Home',
    icon: HomeIcon,
  },
  {
    path: '/about',
    label: 'About',
    icon: InfoIcon,
  },
  {
    path: '/contact',
    label: 'Contact',
    icon: PhoneIcon,
  },
];