// components/WhoWeAre.tsx
'use client';
import Image from 'next/image';
import whoWeAre from '../../../assets/images/whoWeAre1.jpg'
const historyPoints = [
  {
    year: '2018',
    title: 'Founded',
    description: 'Our organization was founded with a mission to empower young leaders through transformative experiences.',
  },
  {
    year: '2021',
    title: 'First Leadership Program',
    description: 'We launched our first leadership program, which saw incredible success with over 100 participants.',
  },
  {
    year: '2020',
    title: 'Global Expansion',
    description: 'Expanded our programs to multiple countries, impacting over 5,000 young leaders worldwide.',
  },
  {
    year: '2023',
    title: 'Leading with Innovation',
    description: 'Introduced cutting-edge online platforms and virtual mentorship to adapt to a changing world.',
  },
];

const WhoWeAre = () => {
  return (
    <section className="relative  text-white py-16">
     
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A285F] via-[#001A40] to-[#001A40] opacity-90 z-[-1]" />

     
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#FFC72C]">Who We Are</h2>
        <p className="text-lg mt-4 text-white/80">
          Discover our journey, mission, and the people behind our success.
        </p>
      </div>

    
      <div className="container mx-auto pl-4 md:pl-8 bg-gray-50">
      
        <div className="md:flex md:justify-between items-center mb-16">
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-[#0A285F]">Our Purpose</h3>
            <p className=" mb-6 text-[#0A285F]">
            We are a Niger-based organization with a vision to empower the next generation of leaders across Africa. Our programs focus on leadership development, providing young people with the tools, mentorship, and opportunities they need to make a meaningful impact in their communities and beyond.
            </p>
            <p className=" text-[#0A285F]">
            What sets us apart is our commitment to creating a unique, immersive learning environment tailored to the challenges and opportunities of Africa. Our leadership programs go beyond theoretical knowledge, emphasizing real-world application, personal growth, and the development of skills that empower young leaders to drive meaningful change across the continent.
            </p>
          </div>

         
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src={whoWeAre}
              alt="Leadership Team"
              width={600}
              height={400}
              className=" shadow-lg object-cover"
              layout="responsive"
            />
          </div>
        </div>

        
        
      </div>
      <div className='container mx-auto px-4 md:px-8'>
      <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-[#FFC72C]">Our History</h3>
          <div className="relative">
            <div className="border-l-2 border-[#FFC72C]">
              {historyPoints.map((point, index) => (
                <div key={index} className="mb-8 pl-8 relative">
                  <div className="absolute -left-3 top-1 w-6 h-6 bg-[#FFC72C] rounded-full"></div>
                  <h4 className="text-xl font-bold">{point.year} - {point.title}</h4>
                  <p className="text-white/80">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
