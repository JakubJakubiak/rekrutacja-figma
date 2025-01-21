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

export const ListArticle: React.FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1290px] mx-auto px-4">
        {/* QR Code Section */}
       
     
        {/* Social Media Section */}
        <section className="py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 max-w-[631px]">
            <h2 className="text-[#080808] text-6xl font-black font-['Urbanist'] leading-[70px] mb-10">
              Share Your Flipbooks on Social Media
            </h2>
            <p className="text-[#080808] text-lg font-normal font-['Roboto'] leading-[31px] mb-10">
              Share your flipbooks on Facebook, LinkedIn, or Twitter. Just paste a link into the post to create an eye-catching preview. With a few clicks, more people will see and interact with your content.
            </p>
            {/* Learn more link */}
            <div className="flex items-center gap-[5px]">
              <span className="text-[#080808] text-lg font-semibold font-['Roboto']">
                Learn more about
              </span>
              <span className="text-[#146ef5] text-lg font-semibold font-['Roboto']">
                Sharing on Social Media
              </span>
              <div className="w-4 h-4 rotate-90">
                <img className="w-[11.13px] h-[11.04px]" src="https://via.placeholder.com/11x11" alt="arrow" />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img className="w-[440px] h-[559px]" src={AniamlMedia} alt="Social Media Preview" />
          </div>
        </section>

        {/* Additional sections follow the same pattern... */}
        {/* You can continue with Email, Specific Page, Custom Link, and Virtual Bookshelf sections 
            using the same flex-based layout structure */}
      </div>
    </div>
  );
};