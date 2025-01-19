import React from "react";
import image from "../../public/image.png";

export const Hero: React.FC = () => {
  return (
    <section className="flex ">
      <div className="flex w-[1290px] items-center justify-between pt-0 pb-[60px] px-0 relative">
      <div className="flex flex-col w-[627px] items-start gap-10 relative">
        <div className="self-stretch mt-[-1.00px] [font-family:'Urbanist-Black',Helvetica] font-black text-6xl leading-[70px] relative text-[#080808] tracking-[0]">
          Sharing Your Flipbooks
        </div>

        <p className="w-[518px] [font-family:'Roboto-Regular',Helvetica] font-normal text-lg leading-[31px] relative text-[#080808] tracking-[0]">
          Sharing your digital publications is easy with Publuu. Whether it’s a
          portfolio, a client catalog, or an online magazine, we give you the
          tools to make it quick and simple. No matter the purpose, we&#39;ve
          got everything you need
        </p>
      </div>

      <img
        className="relative w-[627px] h-[597px] object-cover"
        alt="Image"
        src={image}
      />
    </div>
    </section>
  );
};
