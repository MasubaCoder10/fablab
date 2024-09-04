
// // File: app/components/HeroSection.tsx
// import React from "react";

// const HeroSection: React.FC = () => {
//   return (
//     <section  className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/Hero.jpg')" }}>
//       <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay for better text visibility */}
//       <div className="relative flex flex-col justify-center items-center h-full px-4 text-center text-white space-y-6">
//         <h1 className="text-3xl md:text-5xl font-bold">
//           Shaping Africa’s Future, One Leader at a Time
//         </h1>
//         <p className="max-w-2xl text-lg md:text-xl">
//           Step into your potential. Join our transformative programs to master essential skills, ignite civic change, and lead with purpose in Niger and beyond.
//         </p>
//         <div className="flex space-x-4">
//           <a
//             href="/programs"
//             className="rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             Apply Today
//           </a>
//           <a href="/programs" className="rounded-md px-3.5 py-2.5 text-sm font-semibold leading-6 text-white">
//             Explore Our Programs <span aria-hidden="true">→</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// File: app/components/HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.05), #001A40), url('/Hero.jpg')",
      }}
    >
      <div className="absolute inset-0"></div> {/* Overlay now part of the background gradient */}
      <div className="relative flex flex-col justify-center items-center h-full px-4 text-center text-white space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold">Shaping Africa’s Future, One Leader at a Time</h1>
        <p className="max-w-2xl text-lg md:text-xl">
          Step into your potential. Join our transformative programs to master essential skills, ignite civic change, and lead with purpose in Niger and beyond.
        </p>
        <div className="flex space-x-4">
          <a
            href="/programs"
            className="rounded-md bg-[#FFC72C] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#e5b71f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001A40]"
          >
            Apply Today
          </a>
          <a href="/programs" className="rounded-md px-3.5 py-2.5 text-sm font-semibold leading-6 text-white hover:text-[#f3e3b8]">
            Explore Our Programs <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

