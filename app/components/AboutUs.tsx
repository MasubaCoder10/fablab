// File: app/components/AboutUsSection.tsx

import React from "react";

const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-[#001A40] py-16 px-4 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-base font-semibold leading-7 text-[#FFC72C]">About Next Leadership</h2>
          <p className="mt-2 text-3xl font-inter font-bold tracking-tight text-white sm:text-4xl">
          We train, equip, and connect young leaders to excel!
          </p>
        
        <p className="text-lg font-inter leading-relaxed">
        With a young and growing population, Niger faces unique challenges in development. At Next Leadership, we empower young people with the tools to lead, innovate, and make a difference. Since 2016, we have equipped thousands across Africa with skills like public speaking, leadership, and 21st-century competencies.
        </p>
       
        <a
          href="/vision"
          className="inline-block bg-[#FFC72C] hover:bg-[#e5b71f] text-[#001A40] font-semibold py-2 px-6 rounded-md shadow-md transition-colors"
        >
         Read Our Full Story
        </a>
      </div>
    </section>
  );
};

export default AboutUsSection;

