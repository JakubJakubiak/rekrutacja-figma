import React from 'react';
import book from "../../public/book.png";
import arrowup from "../../public/arrowup.svg";


export const Flipbooks: React.FC = () => {
  return (
    <section id="flipbooks"  className="  bg-[#f2f2f2] ">
      <div className="  max-w-7xl mx-auto  grid grid-cols-1   ">
      <div className="w-[1290px] h-[372px] pt-[120px] pb-20 flex-col justify-start items-center gap-10 inline-flex  ">
    <div className="self-stretch text-center text-[#080808] text-6xl font-black font-['Urbanist'] leading-[70px]">Sharing Flipbooks with Direct Links</div>
    <div className="w-[594px] text-center text-[#080808] text-lg font-normal font-['Roboto'] leading-[31px]">It’s so easy. Just copy the link, send it through email or any messenger, and let your readers open it with a single click.</div>
  </div>

  <div className="w-[850px] h-20 pl-[30px] pr-[15px] py-[13px] rounded-[10px] border border-[#c0c0c0] flex-col justify-center items-start gap-2.5 inline-flex">
  <div className="self-stretch justify-start items-center gap-[30px] inline-flex">
    <div className="justify-start items-center gap-2.5 flex">
      <div className="w-5 h-5 bg-[#c0c0c0] rounded-full" />
      <div className="w-5 h-5 bg-[#c0c0c0] rounded-full" />
    </div>
    <div className="grow shrink basis-0 h-[53px] justify-start items-center gap-2.5 flex">
      <div className="grow shrink basis-0 h-[53px] px-[30px] py-[15px] bg-white rounded-[50px] border border-[#c0c0c0] justify-start items-center gap-2.5 flex">
        <div className="text-black text-xl font-medium font-['Roboto']">https://publuu.com/flip-book/4002/120275</div>
      </div>
      <div className="h-[53px] px-[30px] py-[15px] bg-[#146ef5] rounded-[50px] justify-center items-center gap-2.5 flex">
        <div className="text-white text-xl font-semibold font-['Roboto']">OPEN LINK</div>
      </div>
    </div>
  </div>
</div>
<img className="w-[841px] h-[445px]" src={book} />
<div className="w-[390px] h-[111px] pb-20 flex-col justify-start items-start gap-2.5 inline-flex">
  <div className="self-stretch justify-start items-center gap-[5px] inline-flex">
    <div className="text-center text-[#080808] text-lg font-semibold font-['Roboto'] leading-[31px]">Learn more about </div>
    <div className="justify-start items-center gap-[5px] flex">
      <div className="text-center text-[#146ef5] text-lg font-semibold font-['Roboto'] leading-[31px]">Sharing with Direct Links</div>
      <div className="w-4 h-4 relative origin-top-left rotate-90  overflow-hidden">
        <img className="w-[11.13px] h-[11.04px] left-[2.44px] top-[2.49px] " src={arrowup} />
      </div>
    </div>
  </div>
</div></div>

    </section>
  );
};