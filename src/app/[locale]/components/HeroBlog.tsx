"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
export default function HeroSection() {
  const t = useTranslations('BlogPageHero')
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center">
      <div className="absolute inset-0">
        <Image 
          src="https://t4.ftcdn.net/jpg/01/22/56/35/360_F_122563557_xQh0kIwEo7vaA9H9iRLaPdRZn3VL8AZv.jpg" 
          alt="Hero Image" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
          className="z-0" 
        />
        <div className="bg-gradient-to-b from-transparent to-black opacity-50 absolute inset-0 z-10" />
      </div>
      <div className="container mx-auto px-4 z-20">
        <motion.h1
          className="text-5xl md:text-5xl text-white font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t('title')}
        </motion.h1>
        <motion.p
          className="mt-4 text-xl md:text-2xl text-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t('bio')}
        </motion.p>
       
      </div>
    </section>
  );
}
