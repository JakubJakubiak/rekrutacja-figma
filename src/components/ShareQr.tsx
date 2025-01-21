import React from "react";
import CustomLink from "../../public/CustomLink.png";
import Virtualimage from "../../public/Virtualimage.png";
import arrow from "../../public/arrowup.svg";

export const ShareQr: React.FC = () => {
    const FeatureCard = ({
        image,
        title,
        description,
        learnMoreText,
    }: {
        image: string;
        title: string;
        description: string;
        learnMoreText: string;
    }) => (
        <div className="w-full lg:w-[517px] flex flex-col justify-start items-center lg:items-start gap-4 lg:gap-10">
            <div className="w-full px-6 lg:px-0 flex justify-center lg:justify-start">
                <img
                    className="w-[85%] lg:w-full max-w-[411px] h-auto aspect-[411/350] object-contain"
                    src={image}
                    alt={title}
                />
            </div>
            <div className="flex flex-col justify-start items-start gap-3 lg:gap-5 px-6 lg:px-0">
                <h2 className="text-[#080808] text-xl sm:text-2xl lg:text-[32px] font-black font-['Urbanist'] text-center lg:text-left w-full">
                    {title}
                </h2>
                <p className="text-[#080808] text-sm sm:text-base lg:text-lg font-normal font-['Roboto'] leading-relaxed lg:leading-[31px] text-center lg:text-left">
                    {description}
                </p>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 lg:gap-[5px] px-6 lg:px-0 w-full">
                <span className="text-[#080808] text-sm sm:text-base lg:text-lg font-semibold font-['Roboto']">
                    Learn more about
                </span>
                <span className="text-[#146ef5] text-sm sm:text-base lg:text-lg font-semibold font-['Roboto']">
                    {learnMoreText}
                </span>
                <img
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-[16px] lg:h-[16px]"
                    src={arrow}
                    alt="arrow"
                />
            </div>
        </div>
    );

    return (
        <div className="w-full bg-white py-8 sm:py-12 lg:py-[120px]">
            <div className="max-w-[1290px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-12 lg:gap-8">
                <FeatureCard
                    image={CustomLink}
                    title="Share with a Custom link"
                    description="Add a personal touch to your flipbook links. Share your flipbooks with a custom link that reflects your brand. Replace the default Publuu address with your own to help your audience recognize your business easily."
                    learnMoreText="Sharing with Custom Link"
                />
                <FeatureCard
                    image={Virtualimage}
                    title="Send as a Virtual Bookshelf"
                    description="Why stop at one flipbook? You can share multiple publications in an organized virtual bookshelf. It's a convenient way to present your books, product catalogs, or training materials all in one place."
                    learnMoreText="Sending as Virtual Bookshelf"
                />
            </div>
        </div>
    );
};