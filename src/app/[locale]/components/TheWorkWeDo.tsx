// components/WhoWeAre.tsx
'use client';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
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

const TheWorkWeDo = () => {
  return (
    <section className="relative  text-white pt-16">

      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f5] via-[#e5e5e5] to-[#f3f3f3] opacity-90 z-[-1]" />


      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#064f32]">The work we do</h2>
        <p className="text-lg mt-4 text-black">
          Turning ideas into innovation.
        </p>
      </div>


      <div className="container mx-auto pl-4 md:pl-8 bg-gray-50">

        <div className="md:flex md:justify-between items-center ">

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-orange-600">Our Goals</h3>
            <p className=" mb-6 text-gray-900">
              We’re actively building remarkable things in key areas of AI that are shaping an AI-driven future. A future we aim to enhance through our many, diverse fundamental and applied research projects.
            </p>
            <p className=" text-gray-900 mb-6">
              We’re actively building remarkable things in key areas of AI that are shaping an AI-driven future. A future we aim to enhance through our many, diverse fundamental and applied research projects.
            </p>
            <a
              href="/"
              className="inline-flex items-center px-4 py-1 border border-transparent text-lg font-medium rounded-md text-orange-600 bg-gray-100 hover:bg-[#0a5227] transition-colors duration-300 ease-in-out"
            >
              <div className="w-10 h-10 border border-orange-600 rounded-full flex justify-center items-center mr-3 transition-transform duration-300 hover:scale-110">
                <FaArrowRight className="text-orange-600 text-lg" /> {/* Arrow styled inside circle */}
              </div>
              Learn more about our research
            </a>
          </div>


          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src={'https://businesswest.com/wp-content/uploads/2024/08/WorkplaceAI.jpg'}
              alt="Leadership Team"
              width={600}
              height={400}
              className=" shadow-lg object-cover"
              layout="responsive"
            />
          </div>
        </div>



      </div>
      
    </section>
  );
};

export default TheWorkWeDo;
