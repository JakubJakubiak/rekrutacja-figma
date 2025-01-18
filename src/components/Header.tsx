import React from "react";
import { NavLink } from "./NavLink";
import publuu_logo_v2 from "../../public/publuu_logo_v2.svg";
import Vector from "../../public/Vector.svg";
import chevronright from "../../public/chevronright.svg";

export const Header: React.FC = () => {
  return (
    <header
      className="text-white top-0 z-50"
      style={{ padding: '20px 0px 60px 315px' }}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <img
            src={publuu_logo_v2}
            alt="Publuu Logo"
            className="w-[150px] h-[49px]"
          />

          <nav className="hidden md:flex items-center space-x-6 text-[#080808] ">
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
          <div className="h-[39px] justify-start items-center gap-5 inline-flex">
            <div className="justify-start items-center gap-2.5 flex">
              <div className="px-5 py-2.5 bg-[#080808] rounded-[50px] justify-start items-center gap-2.5 flex">
                <div className="text-white text-base font-semibold font-['Roboto']">
                  Try for free
                </div>
              </div>
              <div className="px-5 py-2.5 rounded-[50px] border-2 border-[#080808] justify-start items-center gap-2.5 flex">
                <div className="text-[#080808] text-base font-semibold font-['Roboto']">
                  Login
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-2.5 flex">
              <div className="justify-start items-center flex">
                <img
                  src={Vector}
                  alt="Menu Icon"
                  className="w-[150px] h-[49px]"
                />
                <div className="text-[#080808] text-base font-semibold font-['Roboto']">
                  EN
                </div>
                <img
                  src={chevronright}
                  alt="Navigation Arrow"
                  className="width: 32px  height:22px ml-1"
                />
                <div className="w-6 h-6 relative origin-top-left rotate-90  overflow-hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
