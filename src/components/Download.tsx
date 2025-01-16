import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

export const Download: React.FC = () => {
  return (
    <section id="download" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Download Now
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <a href="https://play.google.com/store/apps/details?id=inu.night.humanAI" target="_blank" rel="noopener noreferrer">
        <div className="flex w-48 h-14 bg-black text-white rounded-lg items-center justify-center"><div className="mr-3"><svg viewBox="30 336.7 120.9 129.2" width="30" height="40"> <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"></path><path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"></path><path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"></path><path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"></path></svg></div><div><div className="text-xs">GET IT ON</div><div className="text-xl font-semibold font-sans -mt-1">Google Play</div></div>
        </div></a>

        <a href="https://play.google.com/store/apps/details?id=inu.night.humanAI" target="_blank" rel="noopener noreferrer">
        
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <QRCodeSVG
              value="https://play.google.com/store/apps/details?id=inu.night.humanAI"
              size={150}
              level="H"
              includeMargin={true}
            />
          </div></a>
        </div>
      </div>
    </section>
  );
};