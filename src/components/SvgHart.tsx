import React from "react";
import imageQr from "../../public/imageQr.png";
import borderHardHD from "../../public/borderHardHD.svg";
import arrow from "../../public/arrowup.svg";

export const SvgHart: React.FC = () => {
  return (
    <>
      <div className="max-w-[1290px] mx-auto px-4">
      <section className="py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex-1 max-w-[631px]  text-center lg:text-left">
          <h2 className="text-[#080808] text-4xl lg:text-6xl font-black font-['Urbanist'] leading-snug lg:leading-[70px] mb-10">
          Share Your Flipbook with QR Code
          </h2>
          <p className="text-[#080808] text-base lg:text-lg font-normal font-['Roboto'] leading-relaxed lg:leading-[31px] mb-10">
          Publuu generates a QR code for each of your flipbooks automatically. Download it and add to the  business cards, menus, or brochures so people access your publications right away. All they need is a quick smartphone scan.
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-2">
            <span className="text-[#080808] text-base lg:text-lg font-semibold font-['Roboto']">
              Learn more about
            </span>
            <span className="text-[#146ef5] text-base lg:text-lg font-semibold font-['Roboto'] cursor-pointer">
            Sharing with QR Code
            </span>
            <img className="w-[16px] h-[16px]" src={arrow} alt="Arrow" />
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            className="w-[300px] lg:w-[412px] h-auto"
            src={imageQr}
            alt="Social Media Preview"
          />
        </div>
      </section>
      </div>
      <section id="flipbooks" className="py-10 flex flex-col items-center gap-10 px-6 lg:px-20 ">

        <div className="text-center h-[283px]">
          <h2 className="text-[#080808] text-4xl lg:text-6xl font-black font-['Urbanist'] leading-snug lg:leading-[70px] mb-6">
            Embed Flipbook into Your Website
          </h2>
          <p className="text-[#080808] text-base lg:text-lg font-normal font-['Roboto'] leading-relaxed lg:leading-[31px] w-[594px] mx-auto">
            Showcase your flipbooks right on your website with Publuu's embed feature! 
            <br />It’s a simple way to keep your content front and center for your audience.
            <br />
            <strong>See the live demo below to see it in action!</strong>
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6">
          <button className="w-[260px] px-[30px] py-[15px] bg-[#146ef5] text-white text-xl font-semibold font-['Roboto'] rounded-full">
            With a background
          </button>
          <button className="w-[260px] px-[30px] py-[15px] border border-[#c0c0c0] text-[#080808] text-xl font-semibold font-['Roboto'] rounded-full">
            Without a background
          </button>
          <button className="w-[260px] px-[30px] py-[15px] border border-[#c0c0c0] text-[#080808] text-xl font-semibold font-['Roboto'] rounded-full">
            As a clickable button
          </button>
        </div>


        <div className="w-full flex justify-center">
          <img
            className="w-full max-w-[1070px] h-auto"
            src={borderHardHD}
            alt="Large Preview"
          />
        </div>

        <div className="flex  items-center gap-1">
          <div className="text-[#080808] text-lg font-semibold font-['Roboto']">
            Learn more about
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#146ef5] text-lg font-semibold font-['Roboto'] cursor-pointer">
              Sharing with Direct Links
            </span>
            <img className="w-[25px] h-[25px]" src={arrow} alt="Arrow Up" />
          </div>
        </div>
      </section>
    </>
  );
};
