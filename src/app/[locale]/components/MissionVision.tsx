// components/MissionVision.tsx
import { FC } from 'react';
import { FaLightbulb, FaHandshake, FaUserShield, FaHandsHelping, FaPuzzlePiece } from 'react-icons/fa';
import Image from 'next/image';
const values = [
  { icon: FaLightbulb, title: 'Innovation', description: 'We believe in the power of creativity and forward-thinking to address challenges and create new opportunities for African youth.' },
  { icon: FaHandshake, title: 'Collaboration', description: 'We foster partnerships and teamwork, understanding that true leadership involves building bridges and working together towards common goals.' },
  { icon: FaUserShield, title: 'Integrity', description: 'We hold ourselves accountable to the highest ethical standards, ensuring transparency and honesty in everything we do.' },
  { icon: FaHandsHelping, title: 'Empowerment', description: 'Our programs are designed to uplift young leaders, giving them the confidence and resources to take charge of their own futures.' },
  { icon: FaPuzzlePiece, title: 'Diversity & Inclusion', description: 'We celebrate the diversity of our participants and are dedicated to creating inclusive spaces where every voice is heard and valued.' }
];

const MissionVision: FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#001A40] via-[#0C3A6E] to-[#0A285F] bg-opacity-90 text-white py-16 px-4 md:px-8 lg:px-16">
      

     
      <h2 className="text-4xl font-bold text-center mb-12 text-[#FFC72C]">Our Mission and Vision</h2>

      {/* Mission and Vision */}
<div className="space-y-12 mb-16">
  {/* Mission Statement */}
  <div className="text-center flex flex-col items-center">
    <h3 className="text-2xl font-semibold mb-4">Mission Statement</h3>
    <div className="relative w-full max-w-4xl h-64 mb-6">
      <Image
        src="/mission-image.jpg" // Replace with actual image path
        alt="Mission Image"
        layout="fill"
        objectFit="cover"
        className="rounded-lg shadow-lg"
      />
    </div>
    <p className="max-w-3xl mx-auto text-lg">
      Our mission is to empower the next generation of African leaders by providing innovative, impactful, and accessible leadership development programs. We are committed to equipping young people with the skills, mindset, and opportunities needed to lead their communities, countries, and the continent toward a brighter, more sustainable future.
    </p>
  </div>

  {/* Vision Statement */}
  <div className="text-center flex flex-col items-center">
    <h3 className="text-2xl font-semibold mb-4">Vision Statement</h3>
    <div className="relative w-full max-w-4xl h-64 mb-6">
      <Image
        src="/vision-image.jpg" // Replace with actual image path
        alt="Vision Image"
        layout="fill"
        objectFit="cover"
        className="rounded-lg shadow-lg"
      />
    </div>
    <p className="max-w-3xl mx-auto text-lg">
      We envision a future where young African leaders drive meaningful change across the continent, leveraging their creativity, resilience, and leadership to solve pressing challenges, foster economic growth, and cultivate inclusive, thriving communities.
    </p>
  </div>
</div>


      {/* Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-[#0A285F] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <value.icon className="text-4xl mb-4 text-[#FFC72C]" />
            <h4 className="text-xl font-bold mb-2">{value.title}</h4>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;
