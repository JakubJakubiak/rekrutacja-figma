import React from "react";
import book from "../../public/book.png";
import timeroffoutline from "../../public/timeroffoutline.svg";
import sharevariantoutline from "../../public/sharevariantoutline.svg";
import arrowup from "../../public/arrowup.svg";

export const Book: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8 flex flex-col justify-center items-center gap-10 ">
    {/* URL Bar */}
    <div className="w-full max-w-[850px]">
      <div className="w-full h-20 px-6 rounded-[10px] border border-[#c0c0c0] flex items-center gap-8">
        <div className="flex gap-2">
          <div className="w-5 h-5 bg-[#c0c0c0] rounded-full" />
          <div className="w-5 h-5 bg-[#c0c0c0] rounded-full" />
        </div>
        <div className="flex-grow flex gap-4">
          <div className="flex-grow px-8 py-4 bg-white rounded-[50px] border border-[#c0c0c0]">
            <div className="text-black text-xl font-medium font-['Roboto'] truncate">
              https://publuu.com/flip-book/4002/120275
            </div>
          </div>
          <button className="px-8 py-4 bg-[#146ef5] rounded-[50px] hover:bg-[#0056e0] transition-colors">
            <span className="text-white text-xl font-semibold font-['Roboto']">
              OPEN LINK
            </span>
          </button>
        </div>
      </div>
    </div>

    {/* Book Container with Overlapping Elements */}
    <div className="w-full max-w-[841px] relative pb-32  mb-[400px]  ">
      {/* Book Image */}
      <div className="absolute w-full rounded-3xl overflow-hidden   ">
        <img
          className="w-full aspect-[1.89] object-contain"
          src={book}
          alt="Book Preview"
        />
      </div>

      {/* Feature Cards */}
      <div className="absolute w-full h-0 bottom-0 ">
        {/* No Downloads Card */}
        <div className="absolute left-0 bottom-0 w-[231px] h-20 bg-white rounded-[10px] shadow-lg flex items-center gap-2.5 px-4">
          <img 
            className="w-10 h-10 text-[#146ef5] z-10" 
            src={timeroffoutline} 
            alt="No Downloads" 
          />
          <p className="text-[#080808] text-lg font-semibold font-['Roboto']">
            No downloads,<br />No waiting!
          </p>
        </div>

        {/* Share Card */}
        <div className="absolute right-0 bottom-0 translate-y-8 w-[300px] h-20 bg-white rounded-[10px] shadow-lg flex items-center gap-2.5 px-4">
          <img 
            className="w-10 h-10" 
            src={sharevariantoutline} 
            alt="Share" 
          />
          <p className="text-[#080808] text-lg font-semibold font-['Roboto']">
            Share it anywhere and anytime you like!
          </p>
        </div>
      </div>
    </div>

    {/* Learn More Link */}
    <div className="flex items-center gap-2 mt-8 mb-[111px] ">
      <span className="text-[#080808] text-lg font-semibold">
        Learn more about
      </span>
      <div className="flex items-center gap-2 text-[#146ef5] group cursor-pointer">
        <span className="text-lg font-semibold">
          Sharing with Direct Links
        </span>
        <div className="w-6 h-6 relative">
          <img
            className="w-full h-full transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            src={arrowup}
            alt="Arrow Up"
          />
        </div>
      </div>
    </div>
  </section>
  );
};
