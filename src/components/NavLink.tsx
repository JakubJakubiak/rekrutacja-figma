import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-white hover:text-secondary transition-colors duration-200"
    >
      {children}
    </a>
  );
};