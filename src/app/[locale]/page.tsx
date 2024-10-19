"use client";
import CurrentProjects from "./components/CurrentProjects";
import HeroSlider from "./components/hero/Hero";
import imgAi from '../../assets/images/AINiger.webp'
import imgRobotic from '../../assets/images/robotic.webp'
import imgMentorship from '../../assets/images/Mentorship.webp'
import { useTranslations } from 'next-intl';





export default function Home() {
  const t = useTranslations('hero1');
  
  const slides = [
    {
      title: t('0.title'), // No need to include 'hero1' here
      description: t('0.description'),
      imageUrl: imgAi,
    },
    {
      title: t('1.title'),
      description: t('1.description'),
      imageUrl: imgRobotic,
    },
    {
      title: t('2.title'),
      description: t('2.description'),
      imageUrl: imgMentorship,
    },
  ];
 
  return (
    <main>
      <div>
        <HeroSlider slides={slides} />
        <CurrentProjects />
      </div>
    </main>
  );
}
