import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl'; 
import hero2Image from '../../../assets/images/about.jpg'
const HeroSection: React.FC = () => {
  const t = useTranslations('Hero2'); 

  return (
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 26, 64, 0.8)), url(${hero2Image.src})`,
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
        
      </div>
    </section>
  );
};

export default HeroSection;
