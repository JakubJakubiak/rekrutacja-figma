import React from 'react';

export const Footer: React.FC = () => {
  const FooterColumn = ({ title, links }: { title: string; links: string[] }) => (
    <div className="flex flex-col gap-[10px] w-full sm:w-auto">
      <h3 className="text-white text-base font-bold font-['Urbanist'] uppercase leading-[30px]">
        {title}
      </h3>
      <div className="text-white/40 text-base font-semibold font-['Urbanist'] leading-[30px]">
        {links.map((link, index) => (
          <div key={index}>{link}</div>
        ))}
      </div>
    </div>
  );

  return (
    <footer id="contact" className="bg-[#080808] max-w-8xl mx-auto flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1290px] flex flex-col gap-[30px] lg:gap-[60px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4 pt-[30px] lg:pt-[60px]">
          <FooterColumn
            title="PUBLUU"
            links={['Home', 'Reviews', 'Price plan', 'Try for free', 'Site Map']}
          />
          <FooterColumn
            title="Features"
            links={['Virtual Bookshelf', 'Flipbook App', 'Statistics', 'PDF tracking']}
          />
          <FooterColumn
            title="Legal"
            links={['Terms & conditions', 'Privacy statement', 'Cookie policy', 'Refund policy', 'Content Protection']}
          />
          <FooterColumn
            title="Help"
            links={['What is a Flipbook?', 'Help Guide', 'Blog', 'Contact']}
          />
          <FooterColumn
            title="Solutions"
            links={['Flipbook Maker', 'Online Catalog', 'Magazine Maker', 'Brochure Maker', 'PDF Page Flip Effect']}
          />
          <FooterColumn
            title=" "
            links={['Business Proposal', 'Ebook Maker', 'Multimedia Presentation', 'Company Newsletter Maker']}
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-4 pb-[30px]">
          <div className="flex items-center gap-2.5 opacity-40">
            <div className="w-6 h-6 bg-[url('/local.svg')] bg-cover" />
            <div className="flex items-center gap-[5px]">
              <span className="text-white text-base font-bold font-['Urbanist'] uppercase">English</span>
              <div className="w-6 h-6 bg-[url('/arrow2.svg')] bg-cover" />
            </div>
          </div>

          <div className="text-center opacity-40 text-white/50 text-xs sm:text-sm font-bold font-['Urbanist'] uppercase leading-[24px] sm:leading-[30px]">
            <p>Convert your PDF into HTML5 Online flipbook with PAGE FLIP EFFECT.</p>
            <p>All-in-one Flipbook Maker</p>
          </div>

          <div className="flex items-center gap-[15px] opacity-40">
            <span className="text-white text-sm sm:text-base font-bold font-['Urbanist'] uppercase">Follow Us:</span>
            <span className="text-white text-sm sm:text-base font-bold font-['Urbanist'] leading-[30px]">
              Facebook | Linkedin
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};