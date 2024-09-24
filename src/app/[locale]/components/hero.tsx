import Image from 'next/image';
import React from "react";
import heroImage from '../../../assets/images/Hero.jpg';
import { useTranslations } from 'next-intl'; 


const HeroSection: React.FC = () => {
  const t = useTranslations('hero'); 

  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.05), #001A40) `,
      }}
    >
      
      <div className="absolute inset-0"></div> 
      <div className="relative flex flex-col justify-center items-center h-full px-4 text-center text-white space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          {t('title')} 
        </h1>
        <p className="max-w-2xl text-lg md:text-xl">
          {t('description')} 
        </p>
        <div className="flex space-x-4">
          <a
            href="/programs"
            className="rounded-md bg-[#FFC72C] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#e5b71f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001A40]"
          >
            {t('btnApply')} 
          </a>
          <a href="/programs" className="rounded-md px-3.5 py-2.5 text-sm font-semibold leading-6 text-white hover:text-[#f3e3b8]">
            {t('linkProgram')} <span aria-hidden="true">→</span> 
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
