// File: app/components/AboutUsSection.tsx

import React from "react";
import { useTranslations } from 'next-intl'; 

const AboutUsSection: React.FC = () => {
  const t = useTranslations('aboutUs'); 

  return (
    <section className="bg-[#001A40] py-16 px-4 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-base font-semibold leading-7 text-[#FFC72C]">
          {t('about')} 
        </h2>
        <p className="mt-2 text-3xl font-inter font-bold tracking-tight text-white sm:text-4xl">
          {t('title')} 
        </p>
        
        <p className="text-lg font-inter leading-relaxed">
          {t('description')} 
        </p>
       
        <a
          href="/vision"
          className="inline-block bg-[#FFC72C] hover:bg-[#e5b71f] text-[#001A40] font-semibold py-2 px-6 rounded-md shadow-md transition-colors"
        >
          {t('btnReadMore')} 
        </a>
      </div>
    </section>
  );
};

export default AboutUsSection;
