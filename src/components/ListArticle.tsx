import React from "react";
import Emailimage from "../../public/Emailimage.png";
import AniamlMedia from "../../public/AniamlMedia.png";
import Specificpng from "../../public/Specificpng.png";


import arrow from "../../public/arrowup.svg";

export const ListArticle: React.FC = () => {
    return (
        <div className="w-full">
            <div className="max-w-[1290px] mx-auto px-4">

                {/* Social Media Section */}
                <section className="py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="flex-1 max-w-[631px]">
                        <h2 className="text-[#080808] text-6xl font-black font-['Urbanist'] leading-[70px] mb-10">
                            Share Your Flipbooks on Social Media
                        </h2>
                        <p className="text-[#080808] text-lg font-normal font-['Roboto'] leading-[31px] mb-10">
                            Share your flipbooks on Facebook, LinkedIn, or Twitter. Just paste
                            a link into the post to create an eye-catching preview. With a few
                            clicks, more people will see and interact with your content.
                        </p>

                        <div className="flex items-center gap-[5px]">
                            <span className="text-[#080808] text-lg font-semibold font-['Roboto']">
                                Learn more about
                            </span>
                            <span className="text-[#146ef5] text-lg font-semibold font-['Roboto']">
                                Sharing on Social Media
                            </span>
                            <div >
                                <img
                                    className="w-[16px] h-[16px]"
                                    src={arrow}
                                    alt="arrow"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <img
                            className="w-[440px] h-[559px]"
                            src={AniamlMedia}
                            alt="Social Media Preview"
                        />
                    </div>
                </section>

                {/* 2*/}


                <section className="py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="flex-shrink-0">
                        <img
                            className="w-[440px] h-[559px]"
                            src={Emailimage}
                            alt="Social Media Preview"
                        />
                    </div>
                    <div className="flex-1 max-w-[631px]">
                        <h2 className="text-[#080808] text-6xl font-black font-['Urbanist'] leading-[70px] mb-10">
                            Send Flipbooks
                            <br />via Email
                        </h2>
                        <div data-layer="No attachments needed!" className="NoAttachmentsNeeded w-[521px] text-[#080808] text-[40px] font-light font-['Roboto'] leading-[55px] pb-3">No attachments needed!</div>
                        <p className="text-[#080808] text-lg font-normal font-['Roboto'] leading-[31px] mb-10">
                            Say goodbye to big email attachments! Just add your flipbooks’s direct link to an email or include its cover into the signature. Your customers can open it instantly with one simple click, no matter where they are.
                        </p>

                        <div className="flex items-center gap-[5px]">
                            <span className="text-[#080808] text-lg font-semibold font-['Roboto']">
                                Learn more about
                            </span>
                            <span className="text-[#146ef5] text-lg font-semibold font-['Roboto']">
                                Sending Flipbooks via Email
                            </span>
                            <div>
                                <img
                                    className="w-[16px] h-[16px]"
                                    src={arrow}
                                    alt="arrow"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 3 */}

                </section>

                <section className="py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="flex-1 max-w-[631px]">
                        <h2 className="text-[#080808] text-6xl font-black font-['Urbanist'] leading-[70px] mb-10">
                            Guide Readers <br />to a Specific Page
                        </h2>
                        <p className="text-[#080808] text-lg font-normal font-['Roboto'] leading-[31px] mb-10">
                            Take your audience exactly where they need to go! With Publuu, you can create links to specific pages in your flipbook, guiding readers to key content and saving them time searching through the document.
                        </p>

                        <div className="flex items-center gap-[5px]">
                            <span className="text-[#080808] text-lg font-semibold font-['Roboto']">
                                Learn more about
                            </span>
                            <span className="text-[#146ef5] text-lg font-semibold font-['Roboto']">
                                Guiding to Page
                            </span>
                            <div>
                                <img
                                    className="w-[16px] h-[16px]"
                                    src={arrow}
                                    alt="arrow"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <img
                            className="w-[440px] h-[559px]"
                            src={Specificpng}
                            alt="Social Media Preview"
                        />
                    </div>
                </section>

            </div>
        </div>
    );
};
