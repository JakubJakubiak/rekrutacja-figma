import React from 'react';
import { NavLink } from './NavLink';
import publuu_logo_v2 from '../../public/publuu_logo_v2.svg';
import Vector from '../../public/Vector.svg';
import chevronright from '../../public/chevronright.svg';

export const Header: React.FC = () => {
  return (
    <header className="bg-primary w-full top-0 z-50 py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <img 
            src={publuu_logo_v2} 
            alt="Publuu Logo" 
            className="w-[150px] h-[49px]"
          />
          
          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex items-center">
              <NavLink href="#features">Solutions</NavLink>
              <img 
                src={chevronright} 
                alt="Navigation Arrow" 
                className="w-4 h-4 ml-1"
              />
            </div>
            <NavLink href="#download">Features</NavLink>
            <NavLink href="#contact">Examples</NavLink>
            <NavLink href="#contact">Prices</NavLink>
            <NavLink href="#contact">Help</NavLink>
            <NavLink href="#contact">Blog</NavLink>
          </nav>
          
          <img 
            src={Vector} 
            alt="Menu Icon" 
            className="w-[150px] h-[49px]"
          />
        </div>
      </div>
    </header>
  );
};