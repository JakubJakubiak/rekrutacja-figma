import React from "react";
import book from "../../public/book.png";
import arrowup from "../../public/arrowup.svg";
import timeroffoutline from "../../public/timeroffoutline.svg";
import sharevariantoutline from "../../public/sharevariantoutline.svg";

export const Flipbooks: React.FC = () => {
  return (
    <section id="flipbooks" className="  bg-[#f2f2f2] ">
      <div className="  max-w-7xl mx-auto  grid grid-cols-1   ">
        <div className="w-[1290px] h-[372px] pt-[120px] pb-20 flex-col justify-start items-center gap-10 inline-flex  ">
          <div className="self-stretch text-center text-[#080808] text-6xl font-black font-['Urbanist'] leading-[70px]">
            Sharing Flipbooks with Direct Links
          </div>
          <div className="w-[594px] text-center text-[#080808] text-lg font-normal font-['Roboto'] leading-[31px]">
            It’s so easy. Just copy the link, send it through email or any
            messenger, and let your readers open it with a single click.
          </div>
        </div>

        <div className="w-[850px] h-20 pl-[30px] pr-[15px] py-[13px] rounded-[10px] border border-[#c0c0c0] flex-col justify-center items-start gap-2.5 inline-flex">
          <div className="self-stretch justify-start items-center gap-[30px] inline-flex">
            <div className="justify-start items-center gap-2.5 flex">
              <div className="w-5 h-5 bg-[#c0c0c0] rounded-full" />
              <div className="w-5 h-5 bg-[#c0c0c0] rounded-full" />
            </div>
            <div className="grow shrink basis-0 h-[53px] justify-start items-center gap-2.5 flex">
              <div className="grow shrink basis-0 h-[53px] px-[30px] py-[15px] bg-white rounded-[50px] border border-[#c0c0c0] justify-start items-center gap-2.5 flex">
                <div className="text-black text-xl font-medium font-['Roboto']">
                  https://publuu.com/flip-book/4002/120275
                </div>
              </div>
              <div className="h-[53px] px-[30px] py-[15px] bg-[#146ef5] rounded-[50px] justify-center items-center gap-2.5 flex">
                <div className="text-white text-xl font-semibold font-['Roboto']">
                  OPEN LINK
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
      <div className="relative max-w-4xl mx-auto">
        {/* Info Box - No downloads */}
        <div className="absolute left-4 top-1/4 z-10">
          <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4">
            <div className="w-10 h-10 flex-shrink-0">
              <svg
                className="w-full h-full"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-gray-900 font-semibold">
              <p>No downloads</p>
              <p>No waiting!</p>
            </div>
          </div>
        </div>

        {/* Main Book Image */}
        <div className="relative ">
          <img
            src={book}
            alt="Digital catalog spread showing champions and running"
            className="w-[841px] h-[445px]"
          />
        </div>

        {/* Info Box - Share anywhere */}
        <div className="absolute right-4 bottom-1/4 z-10">
          <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4">
            <div className="w-10 h-10 flex-shrink-0">
              <svg
                className="w-full h-full"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
            </div>
            <div className="text-gray-900 font-semibold">
              <p>Share it anywhere</p>
              <p>and anytime you like!</p>
            </div>
          </div>
        </div>

        {/* Learn More Link */}
        <div className="text-center mt-6">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Learn more about Sharing with Direct Links
          </a>
        </div>
      </div>
    </div>

        <div data-layer="Frame 640" className="Frame640 h-[31px] justify-start items-center gap-[5px] inline-flex">
          <div data-layer="Learn more about" className="LearnMoreAbout text-center text-[#080808] text-lg font-semibold font-['Roboto'] leading-[31px]">Learn more about </div>
          <div data-layer="Frame 639" className="Frame639 justify-start items-center gap-[5px] flex">
            <div data-layer="Sharing with Direct Links" className="SharingWithDirectLinks text-center text-[#146ef5] text-lg font-semibold font-['Roboto'] leading-[31px]">Sharing with Direct Links</div>
            <div data-layer="arrow-up" className="ArrowUp w-4 h-4 relative origin-top-left rotate-90  overflow-hidden">
              <img data-layer="Union" className="Union w-[11.13px] h-[11.04px] left-[2.44px] top-[2.49px] " src={arrowup} />
            </div>
          </div>
        </div>
      </div>



    </section>
  );
};
