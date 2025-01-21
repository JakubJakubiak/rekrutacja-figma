import React from "react";

export const BanerFooter: React.FC = () => {
  return (
    <section className="bg-[#080808]">
      <div
        data-layer="Frame 562"
        className="Frame562 w-full max-w-[1290px] h-[528px] py-40 flex flex-col justify-center items-center gap-[60px] mx-auto px-4"
      >
        <div
          data-layer="Frame 209"
          className="Frame209 w-full flex flex-col justify-center items-center gap-10"
        >
          <div
            data-layer="Start sharing flipbooks your way - today!"
            className="StartSharingFlipbooksYourWayToday text-center text-white text-6xl font-black font-['Urbanist'] leading-[90px]"
          >
            Start sharing flipbooks your way - today!
          </div>
        </div>
        <div
          data-layer="Frame 48"
          className="Frame48 px-[30px] py-[15px] bg-[#146ef5] rounded-[50px] flex justify-center items-center gap-2.5"
        >
          <div
            data-layer="Get started for free"
            className="GetStartedForFree text-white text-2xl font-semibold font-['Roboto']"
          >
            Get started for free
          </div>
        </div>
      </div>
    </section>
  );
};
