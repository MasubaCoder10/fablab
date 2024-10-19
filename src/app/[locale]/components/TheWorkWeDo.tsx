// components/WhoWeAre.tsx
'use client';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import imgVision from '../../../assets/images/vision.png';
import imgMision from '../../../assets/images/Mision.webp';
import { useTranslations } from 'next-intl';

const TheWorkWeDo = () => {
  const t = useTranslations('AboutUsPageSection1Card1');
  return (
    <section className="relative text-white pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f5] via-[#e5e5e5] to-[#f3f3f3] opacity-90 z-[-1]" />

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[#064f32]"> {t('title')} </h2>
      </div>

      <div className="container mx-auto bg-gray-50">
        <div className="md:flex md:justify-between items-center">
          <div className="md:w-1/2 pl-4 md:pl-8">
            <h3 className="text-3xl font-bold mb-4 text-orange-600"> {t('titleCard1')} </h3>
            <p className="mb-6 text-gray-900">
             {t('bio1')}
            </p>

            <a
              href="/"
              className="inline-flex items-center px-4 py-1 border border-transparent text-lg font-medium rounded-md text-orange-600 bg-gray-100 hover:bg-[#0a5227] transition-colors duration-300 ease-in-out"
            >
              <div className="w-10 h-10 border border-orange-600 rounded-full flex justify-center items-center mr-3 transition-transform duration-300 hover:scale-110">
                <FaArrowRight className="text-orange-600 text-lg" />
              </div>
              {t('btn1')}
            </a>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative w-full h-96"> 
              <Image
                src={imgMision}
                alt="Leadership Team"
                layout="fill"  
                objectFit="cover" 
                className="shadow-lg"
                priority
              />
            </div>
          </div>
        </div>

        <div className="md:flex md:justify-between items-center mt-12">
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative w-full h-96"> 
              <Image
                src={imgVision}
                alt="Leadership Team"
                layout="fill"  
                objectFit="cover" 
                className="shadow-lg"
              />
            </div>
          </div>

          <div className="md:w-1/2 px-4 md:px-8">
            <h3 className="text-3xl font-bold mb-4 text-orange-600">{t('titleCard2')}</h3>
            <p className="mb-6 text-gray-900">
            {t('bio2')}
            </p>

            <a
              href="/contact"
              className="inline-flex items-center px-4 py-1 border border-transparent text-lg font-medium rounded-md text-orange-600 bg-gray-100 hover:bg-[#0a5227] transition-colors duration-300 ease-in-out"
            >
              <div className="w-10 h-10 border border-orange-600 rounded-full flex justify-center items-center mr-3 transition-transform duration-300 hover:scale-110">
                <FaArrowRight className="text-orange-600 text-lg" />
              </div>
              {t('btn2')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheWorkWeDo;
