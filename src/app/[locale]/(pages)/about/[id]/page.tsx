// pages/team/[id].tsx
'use client';
import { useParams, useRouter } from 'next/navigation';
import { GetTeamMembers } from '../../../data/GetTeamMembers';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, } from 'react-icons/fa';
import HeroSection from '@/src/app/[locale]/components/Hero2';
import { useTranslations } from 'next-intl';

const TeamMemberDetails = () => {
  const params = useParams<{ id: string }>()
  const router = useRouter()
  const t = useTranslations('Btn');

  const teamMembers = GetTeamMembers();
  // Find the team member by id
  const member = teamMembers.find((member) => member.id === parseInt(params.id));

  if (!member) {
    return <p>Team member not found</p>;
  }

  return (
    <div>
      <HeroSection />
      <section className="relative py-12 text-white">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ffff] via-[#edf0ee] to-[#ffff] opacity-90 z-[-1]" />

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center p-6">

            <div className="h-64 w-64 flex flex-col items-center bg-[#084029] p-4 rounded-lg shadow-lg">
              <h1 className="text-xl font-bold text-orange-600 mb-4">
                {member.name}
              </h1>
              <div className="relative h-44 w-44 mb-4 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  className="object-cover" // Ensure the image covers the area correctly
                />
              </div>
            </div>



            <div className="mt-8 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-bold py-3 text-[#084029]">{member.position}</h2>
              <p className="text-sm md:text-md text-gray-900 mb-6">{member.story}</p>
            </div>
          </div>
        </div>



        <div className='max-w-4xl mx-auto bg-[#084029] rounded-2xl shadow-lg p-6'>
          <div className="mt-8 flex-col  items-center text-center  ">

            <blockquote className="italic text-center text-gray-100 mb-6">
              {member.quote}
            </blockquote>
            <div className="flex space-x-4 mt-2 justify-center md:justify-end">
              <Link href={`${member.linkFacebook}`} target="_blank" rel="noopener noreferrer">
                <div className="bg-[#FF6F00] rounded-full p-3 hover:bg-white transition duration-300 group">
                  <FaFacebook className="text-white group-hover:text-[#001A40] transition duration-300" />
                </div>
              </Link>

              <Link href={`${member.linkLinkdin}`} target="_blank" rel="noopener noreferrer">
                <div className="bg-[#FF6F00] rounded-full p-3 hover:bg-white transition duration-300 group">
                  <FaLinkedin className="text-white group-hover:text-[#001A40] transition duration-300" />
                </div>
              </Link>



              <Link href={`${member.linkTwitter}`} target="_blank" rel="noopener noreferrer">
                <div className="bg-[#FF6F00] rounded-full p-3 hover:bg-white transition duration-300 group">
                  <FaTwitter className="text-white group-hover:text-[#001A40] transition duration-300" />
                </div>
              </Link>
            </div>
          </div>

        </div>

        <div className='max-w-4xl flex justify-center md:justify-start  mx-auto py-10'>
          <button
            onClick={() => router.back()}
            className="bg-orange-600  text-white py-2 px-4 rounded-full font-bold hover:bg-orange-700 transition duration-300"
          >
            {t('backToTeam')}
          </button>
        </div>



      </section>
    </div>
  );
};

export default TeamMemberDetails;
