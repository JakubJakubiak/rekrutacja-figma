import React from "react";
import image from "../../public/image.png";

export const Hero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row">
      <div className="flex flex-col md:flex-row w-full items-center justify-between pt-0 pb-10 px-4 md:px-0 relative">
        <div className="flex flex-col w-full md:w-1/2 items-start gap-10 relative">
          <div className="self-stretch mt-[-1.00px] font-black text-4xl md:text-6xl leading-tight md:leading-[70px] relative text-[#080808]">
            Sharing Your Flipbooks
          </div>

          <p className="w-full md:w-[518px] font-normal text-base md:text-lg leading-6 md:leading-[31px] relative text-[#080808]">
            Sharing your digital publications is easy with Publuu. Whether it’s a
            portfolio, a client catalog, or an online magazine, we give you the
            tools to make it quick and simple. No matter the purpose, we&#39;ve
            got everything you need
          </p>
        </div>

        <img
          className="relative w-full md:w-[627px] h-auto md:h-[597px] object-cover mt-10 md:mt-0"
          alt="Image"
          src={image}
        />
        <div data-layer="GIF" className="Gif left-[1500px]   text-[#ff0000] text-[32px] font-black font-['Urbanist']">GIF</div>
      </div>
    </section>
  );
};
