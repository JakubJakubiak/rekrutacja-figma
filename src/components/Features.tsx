import React, { ForwardRefExoticComponent, SVGProps } from 'react';
import { 
  SparklesIcon, 
  BoltIcon, 
  PlayIcon,
} from '@heroicons/react/24/outline';

const features: Array<{
  icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'> >;
  title: string;
  description: string;
}> = [
  {
    icon: SparklesIcon,
    title: 'Intuitive Design',
    description: 'Clean and user-friendly interface for the best experience'
  },

  {
    icon: BoltIcon,
    title: 'It teaches us perceptiveness',
    description: 'It will teach you to pay attention to the rules and develop perceptiveness.'
  },
  {
    icon: PlayIcon,
    title: 'Player Ranking',
    description: 'Improve your ranking scores'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-secondary">
      <div className="container mx-auto px-3">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Amazing Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <feature.icon className="w-12 h-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <svg width="150" height="49" viewBox="0 0 150 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0975 12.2264C8.73065 12.2264 5.54954 13.6635 3.25077 16.137V13.1923H0V49H3.25077V32.7452C5.54954 35.2188 8.73065 36.6558 12.0975 36.6558C18.7384 36.6558 24.1486 31.1668 24.1486 24.4293C24.1486 17.6918 18.7384 12.2264 12.0975 12.2264ZM20.9211 24.4529C20.9211 29.3764 16.9737 33.3813 12.1207 33.3813C7.2678 33.3813 3.32043 29.3764 3.32043 24.4529C3.32043 19.5293 7.2678 15.5245 12.1207 15.5245C16.9737 15.5245 20.9211 19.5293 20.9211 24.4529Z" fill="#146EF5"/>
<path d="M69.6835 12.2264C66.3166 12.2264 63.1355 13.6635 60.8367 16.137V0H57.5859V35.8077H60.8367V32.7452C63.1355 35.2188 66.3166 36.6558 69.6835 36.6558C76.3243 36.6558 81.7345 31.1668 81.7345 24.4293C81.7345 17.6918 76.3243 12.2264 69.6835 12.2264ZM78.507 24.4529C78.507 29.3764 74.5596 33.3813 69.7067 33.3813C64.8537 33.3813 60.9064 29.3764 60.9064 24.4529C60.9064 19.5293 64.8537 15.5245 69.7067 15.5245C74.5596 15.5245 78.507 19.5293 78.507 24.4529Z" fill="#146EF5"/>
<path d="M90.5573 0H87.3065V35.8077H90.5573V0Z" fill="#146EF5"/>
<path d="M146.75 13.1924V23.3457C146.75 27.2799 146.193 29.4943 144.823 30.9313C142.826 33.0044 140.155 33.452 138.251 33.452C136.301 33.452 133.561 33.0044 131.611 30.9313C130.194 29.4236 129.567 27.1385 129.567 23.3457V13.1924H126.316V23.3457C126.316 28.1044 127.199 31.0491 129.242 33.2164C131.425 35.5251 134.536 36.7265 138.228 36.7265H138.298C141.92 36.703 144.985 35.478 147.145 33.2164C149.652 30.578 149.977 26.7381 149.977 23.3457V13.1924H146.75Z" fill="#146EF5"/>
<path d="M117.027 23.3457C117.027 27.2799 116.47 29.4943 115.1 30.9313C113.103 33.0044 110.433 33.452 108.529 33.452C106.578 33.452 103.838 33.0044 101.888 30.9313C100.471 29.4236 99.8445 27.1385 99.8445 23.3457V13.1924H96.5938V23.3457C96.5938 28.1044 97.4761 31.0491 99.5194 33.2164C101.702 35.5251 104.814 36.7265 108.506 36.7265H108.575C112.197 36.703 115.262 35.478 117.422 33.2164C119.93 30.578 120.255 26.7381 120.255 23.3457V13.1924H117.004V23.3457H117.027Z" fill="#146EF5"/>
<path d="M48.7616 23.3457C48.7616 27.2798 48.2043 29.4942 46.8344 30.9312C44.8375 33.0043 42.1672 33.4519 40.2632 33.4519C38.3127 33.4519 35.5728 33.0043 33.6223 30.9312C32.2059 29.4236 31.579 27.1385 31.579 23.3457V13.1923H28.3282V23.3457C28.3282 28.1043 29.2105 31.049 31.2539 33.2163C33.4365 35.525 36.548 36.7264 40.24 36.7264H40.3096C43.9319 36.7029 46.9969 35.4779 49.1564 33.2163C51.6641 30.5779 51.9892 26.738 51.9892 23.3457V13.1923H48.7384V23.3457H48.7616Z" fill="#146EF5"/>
</svg>

            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};