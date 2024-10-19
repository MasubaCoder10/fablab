// components/Partnership.tsx
'use client';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import { PartenersImgs } from '../data/parteners'; 
import { useTranslations } from 'next-intl';
const Partnership = () => {
  const t = useTranslations('AboutUsPageSection3');
  const [firstRow, setFirstRow] = useState(PartenersImgs.slice(0, 4));
  const [secondRow, setSecondRow] = useState(PartenersImgs.slice(4, 8));

  // Memoizing the rotateLogos function to prevent unnecessary re-creations
  const rotateLogos = useCallback(() => {
    const newFirstRow = [...firstRow];
    const newSecondRow = [...secondRow];

    const firstLogo = newFirstRow.shift(); // Remove the first logo from the first row
    if (firstLogo) {
      newSecondRow.push(firstLogo); // Add it to the end of the second row
    }

    const secondLogo = newSecondRow.shift(); // Remove the first logo from the second row
    if (secondLogo) {
      newFirstRow.push(secondLogo); // Add it to the end of the first row
    }

    setFirstRow(newFirstRow);
    setSecondRow(newSecondRow);
  }, [firstRow, secondRow]);

  useEffect(() => {
    const interval = setInterval(() => {
      rotateLogos();
    }, 3000); // Adjust the speed of rotation

    return () => clearInterval(interval);
  }, [rotateLogos]); // Use rotateLogos as a dependency

  return (
    <section className="relative py-16 text-white overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f3f3f3] via-[#ffffff] to-[#ffffff] opacity-95 z-[-1]" />

      {/* Title */}
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-[#084029]"> {t('titlePartner')} </h2>

      {/* Logos in Two Rows */}
      <div className="space-y-12">
        {/* First Row of Logos */}
        <div className="flex flex-wrap justify-around items-center gap-4 transition-all duration-1000 ease-in-out">
          {firstRow.map((partner, index) => (
            <div
              key={index}
              className="w-40 h-32 md:w-52 md:h-40 bg-white shadow-lg rounded-lg p-4 flex justify-center items-center transform hover:scale-110 transition-transform duration-500 ease-in-out"
            >
              <Image
                src={partner.src1}
                alt={`Partner Logo ${index + 1}`}
                width={140}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Second Row of Logos */}
        <div className="flex flex-wrap justify-around items-center gap-4 transition-all duration-1000 ease-in-out">
          {secondRow.map((partner, index) => (
            <div
              key={index}
              className="w-40 h-32 md:w-52 md:h-40 bg-white shadow-lg rounded-lg p-4 flex justify-center items-center transform hover:scale-110 transition-transform duration-500 ease-in-out"
            >
              <Image
                src={partner.src1} // Fallback to src1 if src2 is empty
                alt={`Partner Logo ${index + 1}`}
                width={140}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnership;
