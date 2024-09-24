import {Link} from '@/src/i18n/routing';
import HeroSection from './components/hero';
import AboutUsSection from './components/AboutUs';
import ProgramsOverviewSection from './components/ProgramOverview';
import WorkWithUsSection from './components/workwithus';


export default function Home() {
  
  return (
    <main>
      <HeroSection />
      {/* <HeroSection />
      <AboutUsSection />
      <ProgramsOverviewSection />
      <WorkWithUsSection /> */}
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
