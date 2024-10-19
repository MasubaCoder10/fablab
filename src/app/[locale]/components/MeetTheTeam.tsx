'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import teamMembers from '../data/teamMembers'
import { useTranslations } from 'next-intl';



const MeetTheTeam: React.FC = () => {
  const [visibleTeamCount, setVisibleTeamCount] = useState(3);
  const router = useRouter();
  const t = useTranslations('AboutUsPageSection3');
  const handleLoadMore = () => {
    setVisibleTeamCount((prevCount) => prevCount + 2);
  };

  const handleLearnMore = (id: number) => {
    // Navigate to the dynamic profile page
    router.push(`/about/${id}`);
  };

  return (
    <section className="relative py-12 text-white">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#a1bbb0] via-[#b2beb9] to-[#a1bbb0] opacity-90 z-[-1]" />

      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-orange-600 mb-8"> {t('titleTeam')} </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.slice(0, visibleTeamCount).map((member) => (
            <div
              key={member.id}
              className="relative bg-white rounded-lg shadow-2xl p-6 hover:bg-[#084029] transition duration-300 group"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mb-4 text-black"
                />
                <h3 className="text-xl font-semibold text-orange-600">{member.name}</h3>
                <p className="text-sm text-[#084029] group-hover:text-white">{member.position}</p>
                <p className="text-center mt-3  text-gray-900 group-hover:text-white ">{member.bio}</p>

                {/* Learn More button that shows up on hover */}
                <button
                  onClick={() => handleLearnMore(member.id)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 border border-[#BFD3E3] bg-orange-600 text-white py-2 px-4 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleTeamCount < teamMembers.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="bg-orange-500 text-black py-2 px-6 rounded-full font-bold hover:bg-orange-600 transition duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MeetTheTeam;
