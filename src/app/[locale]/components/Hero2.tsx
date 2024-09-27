import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl'; 

const HeroSection: React.FC = () => {
  const t = useTranslations('Hero2'); 

  return (
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 26, 64, 0.8)), url('/Hero2.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="relative z-10 text-center text-white px-6 lg:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {t('title')}
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          {t('description')}
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-[#0A285F] text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">
            {t('learnMore')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;