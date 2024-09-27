// components/Partnership.tsx
'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const partners = [
  { id: 1, name: 'Partner 1', logo: '/OPTISOFT.png' },
  { id: 2, name: 'Partner 2', logo: '/partner2-logo.png' },
  { id: 3, name: 'Partner 3', logo: '/partner3-logo.png' },
  { id: 4, name: 'Partner 4', logo: '/partner4-logo.png' },
  { id: 5, name: 'Partner 5', logo: '/partner5-logo.png' },
  { id: 6, name: 'Partner 6', logo: '/partner6-logo.png' },
  { id: 7, name: 'Partner 6', logo: '/partner6-logo.png' },
  { id: 8, name: 'Partner 6', logo: '/partner6-logo.png' },
];

const Partnership = () => {
  const [firstRow, setFirstRow] = useState(partners.slice(0, 3));
  const [secondRow, setSecondRow] = useState(partners.slice(3, 6));

  useEffect(() => {
    const interval = setInterval(() => {
      rotateLogos();
    }, 3000); // Adjust the speed of rotation

    return () => clearInterval(interval);
  }, [firstRow, secondRow]);

  const rotateLogos = () => {
    // Move the first logo of the first row to the last of the second row
    const newFirstRow = [...firstRow];
    const newSecondRow = [...secondRow];

    const firstLogo = newFirstRow.shift(); // Remove the first logo of the first row
    if (firstLogo) {
      newSecondRow.push(firstLogo); // Add it to the end of the second row
    }

    const secondLogo = newSecondRow.shift(); // Remove the first logo of the second row
    if (secondLogo) {
      newFirstRow.push(secondLogo); // Add it to the end of the first row
    }

    // Update the state
    setFirstRow(newFirstRow);
    setSecondRow(newSecondRow);
  };

  return (
    <section className="relative py-16  text-white overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A285F] via-[#001A40] to-[#0A285F] opacity-90 z-[-1]" />

      {/* Title */}
      <h2 className="text-center text-4xl font-bold mb-12 text-[#FFC72C]">Our Partners</h2>

      {/* Logos in Two Rows */}
      <div className="space-y-8">
        {/* First Row of Logos */}
        <div className="flex justify-around items-center transition-all duration-1000 ease-in-out">
          {firstRow.map((partner) => (
            <div
              key={partner.id}
              className="w-24 h-24 md:w-32 md:h-32 bg-[#0A285F] rounded-full p-2 flex justify-center items-center transform hover:scale-105 transition-transform duration-500 ease-in-out"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={80}
                height={80}
                className="rounded-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Second Row of Logos */}
        <div className="flex justify-around items-center transition-all duration-1000 ease-in-out">
          {secondRow.map((partner) => (
            <div
              key={partner.id}
              className="w-24 h-24 md:w-32 md:h-32 bg-[#0A285F] rounded-full p-2 flex justify-center items-center transform hover:scale-105 transition-transform duration-500 ease-in-out"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={80}
                height={80}
                className="rounded-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnership;
