// pages/team/[id].tsx
'use client';
import { useParams, useRouter } from 'next/navigation';
import { teamMembers } from '../../../data/teamMembers';
import Image from 'next/image';
import HeroSection from '@/src/app/[locale]/components/Hero2';

const TeamMemberDetails = () => {
  const params = useParams<{ id: string }>()
  const router = useRouter()

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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A285F] via-[#001A40] to-[#001A40] opacity-90 z-[-1]" />

        <div className="container mx-auto px-4">
          <div className="flex  gap-10  items-center p-6">
            <div className='h-44 w-44 flex flex-col items-center bg-[#001A40]'>
              <h1 className="text-xl font-bold text-[#FFC72C] mb-4 py-3">{member.name}</h1>
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mb-6"
              />
            </div>

            <div className="mt-8 text-center ">
              <h2 className="text-2xl text-[#BFD3E3]">{member.position}</h2>
              <p className="text-md text-gray-200 mb-6">{member.story}</p>
            </div>
          </div>
        </div>


        <div className='max-w-4xl mx-auto bg-[#0A285F] rounded-lg shadow-lg p-6'>
          <div className="mt-8 flex items-center text-center  ">

            <blockquote className="italic text-center text-gray-100 mb-6">
              {member.quote}
            </blockquote>

          </div>

        </div>

        <div className='max-w-4xl  mx-auto py-10'>
          <button
            onClick={() => router.back()}
            className="bg-[#FFC72C]  text-[#001A40] py-2 px-4 rounded-full font-bold hover:bg-[#FFD43E] transition duration-300"
          >
            Back to Team
          </button>
        </div>



      </section>
    </div>
  );
};

export default TeamMemberDetails;
