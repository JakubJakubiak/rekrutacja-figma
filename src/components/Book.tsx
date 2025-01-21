import React from "react";
import book from "../../public/book.png";
import timeroffoutline from "../../public/timeroffoutline.svg";
import sharevariantoutline from "../../public/sharevariantoutline.svg";
import arrowup from "../../public/arrowup.svg";

export const Book: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-4 sm:py-8 flex flex-col justify-center items-center gap-6 sm:gap-10 top-0">
    {/* URL Bar */}
    <div className="w-full max-w-[850px]">
      <div className="w-full h-auto sm:h-20 px-3 sm:px-6 py-4 sm:py-0 rounded-[10px] border border-[#c0c0c0] flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        <div className="flex gap-2 self-start sm:self-auto">
          <div className="w-4 sm:w-5 h-4 sm:h-5 bg-[#c0c0c0] rounded-full" />
          <div className="w-4 sm:w-5 h-4 sm:h-5 bg-[#c0c0c0] rounded-full" />
        </div>
        <div className="flex-grow flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4">
          <div className="flex-grow px-4 sm:px-8 py-3 sm:py-4 bg-white rounded-[50px] border border-[#c0c0c0]">
            <div className="text-black text-sm sm:text-xl font-medium font-['Roboto'] truncate">
              https://publuu.com/flip-book/4002/120275
            </div>
          </div>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#146ef5] rounded-[50px] hover:bg-[#0056e0] transition-colors">
            <span className="text-white text-base sm:text-xl font-semibold font-['Roboto']">
              OPEN LINK
            </span>
          </button>
        </div>
      </div>
    </div>

    {/* Book Container with Overlapping Elements */}
    <div className="w-full max-w-[841px] relative pb-24 sm:pb-32 mb-[300px]">
      {/* Book Image */}
      <div className="absolute w-full rounded-2xl sm:rounded-3xl overflow-hidden">
        <img
          className="w-full aspect-[1.89] object-contain"
          src={book}
          alt="Book Preview"
        />
      </div>

      {/* Feature Cards */}
      <div className="absolute w-full h-0 bottom-0 ">
        {/* No Downloads Card */}
        <div className="absolute left-0 bottom-0 w-[200px] sm:w-[231px] h-16 sm:h-20 bg-white rounded-[10px] shadow-lg flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 transform translate-x-0 sm:translate-x-0 "
        style={{ left: '-85px', top: '-50px' }}>
          <img
            className="w-8 sm:w-10 h-8 sm:h-10 text-[#146ef5] z-10"
            src={timeroffoutline}
            alt="No Downloads"
          />
          <p className="text-[#080808] text-sm sm:text-lg font-semibold font-['Roboto']">
            No downloads<br />No waiting!
          </p>
        </div>

        {/* Share Card */}
        <div className="absolute right-0 bottom-0 w-[260px] sm:w-[300px] h-16 sm:h-20 bg-white rounded-[10px] shadow-lg flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 transform translate-y-20 sm:translate-y-8 " 
        style={{ right: '-150px' , top: '50px'}}>
          <img
            className="w-8 sm:w-10 h-8 sm:h-10"
            src={sharevariantoutline}
            alt="Share"
          />
          <p className="text-[#080808] text-sm sm:text-lg font-semibold font-['Roboto']">
            Share it anywhere and anytime you like!
          </p>
        </div>
      </div>
    </div>

    {/* Learn More Link */}
    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 mt-4 sm:mt-8 mb-16 sm:mb-[111px] text-center sm:text-left">
      <span className="text-[#080808] text-base sm:text-lg font-semibold">
        Learn more about
      </span>
      <div className="flex items-center gap-1 sm:gap-2 text-[#146ef5] group cursor-pointer">
        <span className="text-base sm:text-lg font-semibold">
          Sharing with Direct Links
        </span>
        <div className="w-5 sm:w-6 h-5 sm:h-6 relative">
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
