import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-[#080808] text-base font-semibold font-['Roboto'] "
    >
      {children}
    </a>
  );
};