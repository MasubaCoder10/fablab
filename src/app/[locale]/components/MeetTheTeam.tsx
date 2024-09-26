'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Define the team member type
type TeamMember = {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
};

// Team members data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Jane Doe',
    position: 'Program Director',
    bio: 'Experienced leader in youth empowerment programs, with a background in community building.',
    image: '/images/jane.jpg',
  },
  {
    id: 2,
    name: 'John Smith',
    position: 'Mentor',
    bio: 'Leadership coach with over 15 years of experience in mentoring the next generation of leaders.',
    image: '/images/john.jpg',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    position: 'Founder',
    bio: 'Passionate advocate for education and leadership development. Co-founded the Next Leadership program.',
    image: '/images/alice.jpg',
  },
  {
    id: 4,
    name: 'Michael Brown',
    position: 'Coordinator',
    bio: 'Experienced coordinator of leadership events and community activities.',
    image: '/images/michael.jpg',
  },
  {
    id: 5,
    name: 'Emily Davis',
    position: 'Volunteer',
    bio: 'Dedicated volunteer passionate about education and youth programs.',
    image: '/images/emily.jpg',
  },
];

const MeetTheTeam: React.FC = () => {
  const [visibleTeamCount, setVisibleTeamCount] = useState(3);
  const router = useRouter();

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
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A285F] via-[#001A40] to-[#001A40] opacity-90 z-[-1]" />

      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-[#FFC72C] mb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.slice(0, visibleTeamCount).map((member) => (
            <div
              key={member.id}
              className="relative bg-[#0A285F] rounded-lg shadow-lg p-6 hover:bg-[#001A40] transition duration-300 group"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-[#FFC72C]">{member.name}</h3>
                <p className="text-sm text-[#BFD3E3]">{member.position}</p>
                <p className="text-center mt-3 text-gray-200 group-hover:text-[#001A40] ">{member.bio}</p>

                {/* Learn More button that shows up on hover */}
                <button
                  onClick={() => handleLearnMore(member.id)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 border border-[#BFD3E3] bg-[#0A285F] text-white py-2 px-4 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
              className="bg-[#FFC72C] text-[#001A40] py-2 px-6 rounded-full font-bold hover:bg-[#FFD43E] transition duration-300"
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
