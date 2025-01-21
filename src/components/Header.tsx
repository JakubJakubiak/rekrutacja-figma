import React from "react";
import publuu_logo_v2 from "../../public/publuu_logo_v2.svg";
import Flags from "../../public/Flags.svg";
import chevronright from "../../public/chevronright.svg";

export const Header: React.FC = () => {
  return (
    <header className="text-white top-0 z-50 max-w-7xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 md:flex-nowrap md:gap-[291px] md:pt-5 md:pb-[60px] md:px-0">
        <div className="flex items-center gap-4 md:gap-[60px]">
          <img
            className="w-[100px] h-[33px] md:w-[150px] md:h-[49px]"
            alt="Publuu logo"
            src={publuu_logo_v2}
          />

          <div className="flex items-center gap-2">
            <div className="font-semibold text-[#080808] text-base whitespace-nowrap">
              Solutions
            </div>
            <img className="w-4 h-4 md:w-6 md:h-6" alt="Chevron right" src={chevronright} />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Features", "Examples", "Prices", "Help", "Blog"].map((item) => (
              <div key={item} className="font-semibold text-[#080808] text-base whitespace-nowrap">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-5">
          <div className="flex items-center gap-2.5">
            <div className="px-5 py-2.5 bg-[#080808] rounded-[50px]">
              <div className="font-semibold text-white text-base whitespace-nowrap">
                Try for free
              </div>
            </div>

            <div className="px-5 py-2.5 rounded-[50px] border-2 border-solid border-[#080808]">
              <div className="font-semibold text-[#080808] text-base whitespace-nowrap">
                Login
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <img className="w-6 h-[16px] md:w-8 md:h-[22px]" alt="Vector" src={Flags} />

            <div className="flex items-center gap-2">
              <div className="font-semibold text-[#080808] text-base whitespace-nowrap">
                EN
              </div>
              <img className="w-4 h-4 md:w-6 md:h-6" alt="Chevron right" src={chevronright} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
