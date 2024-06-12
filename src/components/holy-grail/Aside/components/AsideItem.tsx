import React from 'react';
import { NavLink } from 'react-router-dom';

interface CustomNavLinkProps {
  label: string;
  path: string;
  children?: React.ReactNode;
}

export const AsideItem: React.FC<CustomNavLinkProps> = ({ label, path, children }) => {
  return (
    <NavLink to={path} className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700">
      {children}
      <span className="ml-3 flex-1 whitespace-nowrap">{label}</span>
    </NavLink>
  );
};