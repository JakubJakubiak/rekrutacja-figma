import React from 'react';
import { NavLink } from './NavLink';

export const Header: React.FC = () => {
  return (
    <header className="bg-blue-700 py-4  w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Human or Ai</h1>
          <nav className="hidden md:flex space-x-6">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#download">Download</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};