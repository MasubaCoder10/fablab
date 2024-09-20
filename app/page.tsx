import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero";
import AboutUsSection from "./components/AboutUs";
import WorkWithUsSection from "./components/workwithus";
import ProgramsOverviewSection from "./components/ProgramOverview";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <ProgramsOverviewSection />
      <WorkWithUsSection />

    </main>
  );
}
