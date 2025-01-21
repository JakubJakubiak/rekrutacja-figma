import React from "react";
import book from "../../public/book.png";
import imageQr from "../../public/imageQr.png";
import Website from "../../public/Website.png";
import timeroffoutline from "../../public/timeroffoutline.svg";
import sharevariantoutline from "../../public/sharevariantoutline.svg";
import image from "../../public/image.png";
import arrowup from "../../public/arrowup.svg";


import Specificpng from "../../public/Specificpng.png";
import CustomLink from "../../public/CustomLink.png";
import Virtualimage from "../../public/Virtualimage.png";

import borderHardHD from "../../public/borderHardHD.svg";


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

          <img className="w-full h-auto" src={borderHardHD} alt="Website Preview" />

           <div className="h-[171px] flex justify-center items-center gap-[5px]">
                 <div className="text-center text-[#080808] text-lg font-semibold font-['Roboto'] leading-[31px] text-[18px]">
                 Learn more about
                 </div>
                 <div className="flex justify-center items-center gap-[5px]">
                   <div className="text-center text-[#146ef5] text-lg font-semibold font-['Roboto'] leading-[31px] text-[18px]">
                   Embedding Flipbooks
                   </div>
                   <div className=" relative origin-top-left  overflow-hidden">
                     <img
                       className="w-[25.13px] h-[25.04px] "
                       src={arrowup}
                       alt="Arrow Up"
                     />
                   </div>
                 </div>
               </div>
   
        </section>
       


        {/* <svg width="1070" height="592" viewBox="0 0 1070 592" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0H1060C1065.52 0 1070 4.47715 1070 10V60H0V10Z" fill="#E9E9E9"/>
<circle cx="40" cy="30" r="10" fill="white"/>
<circle cx="70" cy="30" r="10" fill="white"/>
<rect x="110" y="14" width="849" height="32" rx="16" fill="white"/>
<path d="M1016 19H1049V22.6667H1016V19ZM1016 28.1667H1049V31.8333H1016V28.1667ZM1016 37.3333H1049V41H1016V37.3333Z" fill="white"/>
<rect x="110" y="172" width="220" height="32" rx="5" fill="#E9E9E9"/>
<rect x="110" y="224" width="189" height="32" rx="5" fill="#E9E9E9"/>
<rect x="110" y="276" width="220" height="32" rx="5" fill="#E9E9E9"/>
<rect x="110" y="328" width="189" height="32" rx="5" fill="#E9E9E9"/>
<rect x="110" y="410" width="220" height="136" rx="5" fill="#E9E9E9"/>

<path d="M1 10C1 5.02944 5.02944 1 10 1H1060C1064.97 1 1069 5.02944 1069 10V582C1069 586.971 1064.97 591 1060 591H9.99997C5.02942 591 1 586.971 1 582V10Z" stroke="#E9E9E9" stroke-width="2"/>
<rect x="110" y="90" width="220" height="32" rx="5" fill="#E9E9E9"/>
<rect x="425" y="90" width="535" height="32" rx="5" fill="#E9E9E9"/>
</svg> */}

</div>
    </div>
  );
};