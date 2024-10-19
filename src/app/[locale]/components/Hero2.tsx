
import React from 'react';
const HeroSection: React.FC = () => {


  return (



    
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 26, 64, 0.8)), url("")`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="relative z-10 text-center text-white px-6 lg:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Innovating Locally, Empowering Globally
        </h1>
        
        
      </div>
    </section>
  );
};

export default HeroSection;
