// File: app/components/ProgramsOverviewSection.tsx

import Image from "next/image";
import React from "react";
import { useTranslations } from 'next-intl';

const ProgramsOverviewSection: React.FC = () => {
  const t = useTranslations('program');

  const programs = [
    {
      name: t('blogNameNext'),
      description: t('blogDesNext'),
      period: t('blogPeripdNext'),
      imageUrl: '/Senior.jpg',
    },
    {
      name: t('blogNameYouth'),
      description: t('blogDesYouth'),
      period: t('blogPeripdYouth'),
      imageUrl: '/Junior.jpg',
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#001A40] to-[#0A285F] py-24 sm:py-32">
      {/* Gradient Overlays */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#FFC72C] to-[#001A40] opacity-20"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#FFC72C] to-[#001A40] opacity-20"
        />
      </div>

     
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-din font-bold tracking-tight text-white sm:text-5xl">
            {t('title')} 
          </h2>
          <p className="mt-6 text-lg font-inter leading-8 text-white">
            {t('description')} 
          </p>
        </div>

        {/* Programs List */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:max-w-none">
          {programs.map((program) => (
            <div key={program.name} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
              <Image 
                src={program.imageUrl} 
                alt={program.name} 
                className="h-48 w-full object-cover" 
                width={500} 
                height={240} 
                layout="responsive" 
              />
              <div className="p-6 h-full rounded-lg bg-[#001A40]">
                <h3 className="text-2xl font-din font-bold text-[#FFC72C]">{program.name}</h3>
                <p className="mt-4 text-lg font-inter text-white">{program.description}</p>
                <p className="mt-2 text-sm text-gray-300">Typical Period: {program.period}</p>
                <a
                  href="#"
                  className="mt-6 inline-block bg-[#FFC72C] text-[#001A40] font-semibold py-2 px-4 rounded-md shadow-md hover:bg-[#e5b71f] transition-colors"
                >
                  {program.name === t('blogNameNext') ? t('blogBtnLearnMoreNext') : t('blogBtnLearnMoreYouth')} 
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsOverviewSection;
