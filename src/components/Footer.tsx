import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#080808] max-w-8xl mx-auto flex justify-center items-center">
      <div className="w-[1290px] flex flex-col gap-[60px]">

        <div className="flex justify-between pt-[60px]">
        
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-white text-base font-bold font-['Urbanist'] uppercase leading-[30px]">PUBLUU</h3>
            <p className="text-white/40 text-base font-semibold font-['Urbanist'] leading-[30px]">
              Home<br />Reviews<br />Price plan<br />Try for free<br />Site Map
            </p>
          </div>
          
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-white text-base font-bold font-['Urbanist'] uppercase leading-[30px]">Features</h3>
            <p className="text-white/40 text-base font-semibold font-['Urbanist'] leading-[30px]">
              Virtual Bookshelf<br />Flipbook App<br />Statistics<br />PDF tracking
            </p>
          </div>

          <div className="flex flex-col gap-[10px]">
            <h3 className="text-white text-base font-bold font-['Urbanist'] uppercase leading-[30px]">Legal</h3>
            <p className="text-white/40 text-base font-semibold font-['Urbanist'] leading-[30px]">
              Terms & conditions<br />Privacy statement<br />Cookie policy<br />Refund policy<br />Content Protection
            </p>
          </div>

          <div className="flex flex-col gap-[10px]">
            <h3 className="text-white text-base font-bold font-['Urbanist'] uppercase leading-[30px]">Help</h3>
            <p className="text-white/40 text-base font-semibold font-['Urbanist'] leading-[30px]">
              What is a Flipbook?<br />Help Guide<br />Blog<br />Contact
            </p>
          </div>
    
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-white text-base font-bold font-['Urbanist'] uppercase leading-[30px]">Solutions</h3>
            <p className="text-white/40 text-base font-semibold font-['Urbanist'] leading-[30px]">
              Flipbook Maker<br />Online Catalog<br />Magazine Maker<br />Brochure Maker<br />PDF Page Flip Effect
            </p>
          </div>

          <div className="flex flex-col gap-[10px]">
            <h3 className="text-white text-base font-bold font-['Urbanist'] uppercase leading-[30px]">&nbsp;</h3>
            <p className="text-white/40 text-base font-semibold font-['Urbanist'] leading-[30px]">
              Business Proposal<br />Ebook Maker<br />Multimedia Presentation<br />Company Newsletter Maker
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center pb-[30px]">
          <div className="flex items-center gap-2.5 opacity-40">
            <div className="w-6 h-6 bg-[url('/local.svg')] bg-cover" />
            <div className="flex items-center gap-[5px]">
              <span className="text-white text-base font-bold font-['Urbanist'] uppercase">English</span>
              <div className="w-6 h-6 bg-[url('/arrow2.svg')] bg-cover" />
            </div>
          </div>


          <div className="text-center opacity-40 text-white/50 text-sm font-bold font-['Urbanist'] uppercase leading-[30px]">
            <p>Convert your PDF into HTML5 Online flipbook with PAGE FLIP EFFECT.</p>
            <p>All-in-one Flipbook Maker</p>
          </div>

          <div className="flex items-center gap-[15px] opacity-40">
            <span className="text-white text-base font-bold font-['Urbanist'] uppercase">Follow Us:</span>
            <span className="text-white text-base font-bold font-['Urbanist'] leading-[30px]">Facebook | Linkedin</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
