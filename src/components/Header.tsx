import React from "react";
import { NavLink } from "./NavLink";
import publuu_logo_v2 from "../../public/publuu_logo_v2.svg";
import Vector from "../../public/Vector.svg";
import chevronright from "../../public/chevronright.svg";
// import LanguageSelector from "./flags";

export const Header: React.FC = () => {
  return (
    <header
      className="text-white top-0 z-50"
      // style={{ padding: '20px 0px 60px 315px' }}
    >
    <div className="flex w-[1291px] items-center gap-[291px] pt-5 pb-[60px] px-0 relative">
      <div className="gap-[60px] inline-flex items-center relative flex-[0_0_auto]">
        <img
          className="relative w-[150px] h-[49px]"
          alt="Publuu logo"
          src={publuu_logo_v2}
        />

        <div className="gap-2 inline-flex items-center relative flex-[0_0_auto]">
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="relative w-fit [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#080808] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Solutions
            </div>

            <img
              className="relative w-6 h-6"
              alt="Chevron right"
              src={chevronright}
            />
          </div>

          <div className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#080808] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Features
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#080808] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Examples
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#080808] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Prices
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#080808] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Help
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#080808] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Blog
            </div>
          </div>
        </div>
      </div>

      <div className="gap-5 mr-[-6.00px] inline-flex items-center relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <div className="gap-2.5 px-5 py-2.5 bg-[#080808] rounded-[50px] inline-flex items-center relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Try for free
            </div>
          </div>

          <div className="gap-2.5 px-5 py-2.5 rounded-[50px] border-2 border-solid border-[#080808] inline-flex items-center relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#080808] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Login
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <img className="relative w-8 h-[22px]" alt="Vector" src={Vector} />

          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="relative w-fit [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#080808] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              EN
            </div>

            <img className="relative w-6 h-6" alt="Chevron right" src={chevronright} />
          </div>
        </div>
      </div>
    </div>
    </header>
  );
};
