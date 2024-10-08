// import {Link} from '@/src/i18n/routing';
// import HeroSection from './components/hero';
// import AboutUsSection from './components/AboutUs';
// import ProgramsOverviewSection from './components/ProgramOverview';
// import WorkWithUsSection from './components/workwithus';
// import BackToTop from './components/BackToTop';

import HeroSlider from "./components/hero/Hero";


const slides = [
  {
    title: 'AI Research for Local Languages',
    description: 'We are creating AI-driven tools for local languages in Niger to enhance communication and digital inclusion through innovative translation and educational resources.',
    imageUrl: 'https://africanarguments.org/wp-content/uploads/2022/05/image_123986672.jpg',
  },
  {
    title: 'Empowering Innovation through 3D Printing in Niger',
    description: 'Discover how 3D printing in FabLabs enhances accessibility, fosters customization, and drives sustainable solutions, empowering local communities to solve unique challenges and promote economic growth',
    imageUrl: 'https://www.un.org/africarenewal/sites/www.un.org.africarenewal/files/styles/ar_main_story_big_picture/public/images/Fatou%20setting%20up%20her%20machine%20to%20print%20some%203D%20products%20photo%20credit%20to%20Royal%20Academy%20of%20Engineering%20Africa%20Prize2_1.jpg?itok=ZLXUe4JF',
  },
  {
    title: 'Voices of Niger: Celebrating Local Languages',
    description: "This book explores Niger's rich linguistic heritage, highlighting stories and cultural wisdom while emphasizing the need to preserve local languages.",
    imageUrl: 'https://cms.groupeditors.com/img/291e87e9-d650-422a-9c6a-eecdc2d043bb.jpg',
  },
 
];
export default function Home() {
  
  return (
    <main>
      <div>
      <HeroSlider slides={slides} />
    </div>
        {/* <HeroSection /> */}
      {/* <AboutUsSection />
      <ProgramsOverviewSection />
      <WorkWithUsSection />   */}
      {/* <Navbar />
      <HeroSection />
      <AboutUsSection />
      <ProgramsOverviewSection />
      <WorkWithUsSection /> */}


      {/* <div>
      <h1>{t('title')}</h1>
      <Link href="/">{t('Accueil')}</Link>
    </div> */}
    </main>
  );
}
