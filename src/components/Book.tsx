import React from "react";
import book from "../../public/book.png";
import imageQr from "../../public/imageQr.png";
import Website from "../../public/Website.png";
import timeroffoutline from "../../public/timeroffoutline.svg";
import sharevariantoutline from "../../public/sharevariantoutline.svg";

import Emailimage from "../../public/Emailimage.png";
import AniamlMedia from "../../public/AniamlMedia.png";
import Specificpng from "../../public/Specificpng.png";
import CustomLink from "../../public/CustomLink.png";
import Virtualimage from "../../public/Virtualimage.png";


export const Book: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto flex flex-col justify-center items-center gap-10">

      <div className="w-full flex justify-center items-center">
        <div className="w-[850px] h-20 pl-[30px] pr-[15px] py-[13px] rounded-[10px] border border-[#c0c0c0] flex flex-col justify-center items-start gap-2.5">
          <div className="w-full flex justify-start items-center gap-[30px]">
            <div className="flex justify-start items-center gap-2.5">
              <div className="w-5 h-5 bg-[#c0c0c0] rounded-full" />
              <div className="w-5 h-5 bg-[#c0c0c0] rounded-full" />
            </div>
            <div className="flex-grow flex justify-start items-center gap-2.5">
              <div className="flex-grow h-[53px] px-[30px] py-[15px] bg-white rounded-[50px] border border-[#c0c0c0] flex justify-start items-center gap-2.5">
                <div className="text-black text-xl font-medium font-['Roboto']">https://publuu.com/flip-book/4002/120275</div>
              </div>
              <div className="h-[53px] px-[30px] py-[15px] bg-[#146ef5] rounded-[50px] flex justify-center items-center gap-2.5">
                <div className="text-white text-xl font-semibold font-['Roboto']">OPEN LINK</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className="w-[841px] h-[445px]" src={book} alt="Book" />

      <div className="w-full flex justify-around">
        <div className="w-[260px] px-[30px] py-[15px] bg-[#146ef5] rounded-[50px] flex justify-center items-center gap-2.5">
          <div className="text-white text-xl font-semibold font-['Roboto']">With a background</div>
        </div>
        <div className="w-[260px] px-[30px] py-[15px] rounded-[50px] border border-[#c0c0c0] flex justify-center items-center gap-2.5">
          <div className="text-[#080808] text-xl font-semibold font-['Roboto']">Without a background</div>
        </div>
        <div className="w-[260px] px-[30px] py-[15px] rounded-[50px] border border-[#c0c0c0] flex justify-center items-center gap-2.5">
          <div className="text-[#080808] text-xl font-semibold font-['Roboto']">As a clickable button</div>
        </div>
      </div>

      <div className="w-full flex justify-between  ">
      <div className="w-[231px] h-20 pl-[15px] pr-5 py-[15px] bg-white rounded-[10px] left-[485px] top-[1385px]  shadow-[0px_10px_10px_0px_rgba(0,0,0,0.25)] flex justify-center items-center gap-2.5 absolute">
          <img className="w-10 h-10" src={timeroffoutline} alt="No Downloads" />
          <div className="text-[#080808] text-xl font-semibold font-['Roboto'] text-center">No downloads, No waiting!</div>
        </div>

        <div className="w-[300px] h-20 pl-[15px] pr-5 py-[15px] bg-white rounded-[10px] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.25)] flex justify-center items-center gap-2.5 left-[1206px] top-[1495px] absolute">
          <img className="w-10 h-10" src={sharevariantoutline} alt="Share" />
          <div className="text-[#080808] text-xl font-semibold font-['Roboto'] text-center">Share it anywhere and anytime you like!</div>
        </div>

      
      </div>

    </section>
  );
};
