import React from "react";
import book from "../../public/book.png";
import imageQr from "../../public/imageQr.png";
import Website from "../../public/Website.png";
import timeroffoutline from "../../public/timeroffoutline.svg";
import sharevariantoutline from "../../public/sharevariantoutline.svg";
import image from "../../public/image.png";
import Emailimage from "../../public/Emailimage.png";
import AniamlMedia from "../../public/AniamlMedia.png";
import Specificpng from "../../public/Specificpng.png";
import CustomLink from "../../public/CustomLink.png";
import Virtualimage from "../../public/Virtualimage.png";

export const ShareQr: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1290px] mx-auto px-4">
        {/* QR Code Section */}
        <section className="py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 max-w-[630px]">
            <h2 className="text-[#080808] text-6xl font-black font-['Urbanist'] leading-[70px] mb-10">
              Share Your Flipbook with QR Code
            </h2>
            <p className="text-[#080808] text-lg font-normal font-['Roboto'] leading-[31px] mb-10">
              Publuu generates a QR code for each of your flipbooks automatically. Download it and add to the business cards, menus, or brochures so people access your publications right away. All they need is a quick smartphone scan.
            </p>
            <div className="flex items-center gap-[5px]">
              <span className="text-[#080808] text-lg font-semibold font-['Roboto']">
                Learn more about
              </span>
              <div className="flex items-center gap-[5px]">
                <span className="text-[#146ef5] text-lg font-semibold font-['Roboto']">
                  Sharing with QR Code
                </span>
                <div className="w-4 h-4 rotate-90">
                  <img className="w-[11.13px] h-[11.04px]" src="https://via.placeholder.com/11x11" alt="arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img className="w-[412px] h-[521px]" src={imageQr} alt="QR Code" />
          </div>
        </section>

        {/* Embed Section */}
        <section className="py-20">
          <div className="text-center mb-20">
            <h2 className="text-[#080808] text-6xl font-black font-['Urbanist'] leading-[70px] mb-10">
              Embed Flipbook into Your Website
            </h2>
            <p className="text-[#080808] text-lg font-normal font-['Roboto'] leading-[31px] max-w-[632px] mx-auto">
              Showcase your flipbooks right on your website with Publuu's embed feature! It's a simple way to keep your content front and center for your audience.
              <strong>See the live demo below to see it in action!</strong>
            </p>

          </div>

          <div className="flex justify-center gap-8 mb-10">
            <div className="w-[260px] px-[30px] py-[15px] bg-[#146ef5] rounded-[50px] flex justify-center items-center">
              <div className="text-white text-xl font-semibold font-['Roboto']">With a background</div>
            </div>
            <div className="w-[260px] px-[30px] py-[15px] rounded-[50px] border border-[#c0c0c0] flex justify-center items-center">
              <div className="text-[#080808] text-xl font-semibold font-['Roboto']">Without a background</div>
            </div>
            <div className="w-[260px] px-[30px] py-[15px] rounded-[50px] border border-[#c0c0c0] flex justify-center items-center">
              <div className="text-[#080808] text-xl font-semibold font-['Roboto']">As a clickable button</div>
            </div>
          </div>




          <div className="bg-[#e8e8e8] rounded-[10px] p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                {/* Embed options/controls */}
                <div className="space-y-5">
                  <div className="h-8 bg-[#e8e8e8] rounded-[5px]" />
                  <div className="h-8 w-[189px] bg-[#e8e8e8] rounded-[5px]" />
                  <div className="h-8 bg-[#e8e8e8] rounded-[5px]" />
                  <div className="h-8 w-[189px] bg-[#e8e8e8] rounded-[5px]" />
                </div>
                <div className="h-[136px] mt-[50px] bg-[#e8e8e8] rounded-[5px]" />
              </div>
              <div className="flex-1">
                <img className="w-full h-auto" src={Website} alt="Website Preview" />
              </div>
            </div>
          </div>
        </section>

      
      </div>
    </div>
  );
};