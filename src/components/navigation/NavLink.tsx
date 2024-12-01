import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import type { NavItem } from '../../types/navigation';

interface Props {
  item: NavItem;
}

const NavLink: React.FC<Props> = ({ item }) => {
  const { path, label, icon: Icon } = item;
  
  return (
    <RouterNavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center space-x-1 ${
          isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
        }`
      }
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </RouterNavLink>
  );
};

export default NavLink;