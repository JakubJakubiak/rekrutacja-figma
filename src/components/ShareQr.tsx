import React from "react";
import CustomLink from "../../public/CustomLink.png";
import Virtualimage from "../../public/Virtualimage.png";

export const ShareQr: React.FC = () => {
    return (
        <div className="w-full bg-white flex justify-center py-[120px]">
            <div className="w-[1290px] flex justify-between items-center">
                <div className="w-[519px] flex flex-col justify-start items-start gap-10">
                    <img className="w-[410px] h-[349px]" src={CustomLink} />
                    <div className="self-stretch h-[182px] flex flex-col justify-start items-start gap-5">
                        <div className="text-[#080808] text-[32px] font-black font-['Urbanist']">Share with a Custom link</div>
                        <div className="text-[#080808] text-lg font-normal font-['Roboto'] leading-[31px]">
                            Add a personal touch to your flipbook links. Share your flipbooks with a custom link that reflects your brand. Replace the default Publuu address with your own to help your audience recognize your business easily.
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-[5px]">
                        <div className="flex justify-start items-center gap-[5px]">
                            <div className="text-center text-[#080808] text-lg font-semibold font-['Roboto'] leading-[31px]">Learn more about </div>
                            <div className="flex justify-start items-center gap-[5px]">
                                <div className="text-[#146ef5] text-lg font-semibold font-['Roboto'] leading-[31px]">Sharing with Custom Link</div>
                                <div className="w-4 h-4 relative origin-top-left rotate-90 overflow-hidden">
                                    <img className="w-[11.13px] h-[11.04px] left-[2.44px] top-[2.49px] absolute" src="https://via.placeholder.com/11x11" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[517px] flex flex-col justify-start items-start gap-10">
                    <img className="w-[411px] h-[350px]" src={Virtualimage} />
                    <div className="self-stretch h-[182px] flex flex-col justify-start items-start gap-5">
                        <div className="text-[#080808] text-[32px] font-black font-['Urbanist']">Send as a Virtual Bookshelf</div>
                        <div className="text-[#080808] text-lg font-normal font-['Roboto'] leading-[31px]">
                            Why stop at one flipbook? You can share multiple publications in an organized virtual bookshelf. It’s a convenient way to present your books, product catalogs, or training materials all in one place.
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-[5px]">
                        <div className="flex justify-start items-center gap-[5px]">
                            <div className="text-center text-[#080808] text-lg font-semibold font-['Roboto'] leading-[31px]">Learn more about </div>
                            <div className="flex justify-start items-center gap-[5px]">
                                <div className="text-[#146ef5] text-lg font-semibold font-['Roboto'] leading-[31px]">Sending as Virtual Bookshelf</div>
                                <div className="w-4 h-4 relative origin-top-left rotate-90 overflow-hidden">
                                    <img className="w-[11.13px] h-[11.04px] left-[2.44px] top-[2.49px] absolute" src="https://via.placeholder.com/11x11" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
