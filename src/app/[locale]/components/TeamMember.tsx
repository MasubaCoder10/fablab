import React from 'react';
import Image from 'next/image';

type TeamMemberProps = {
  name: string;
  position: string;
  image: string;
  story: string;
  quote: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image, story, quote }) => {
  return (
    <div className="relative bg-[#0A285F] rounded-lg shadow-lg p-6 hover:bg-[#001A40] transition duration-300 group">
      <div className="flex flex-col items-center">
        <Image
          src={image}
          alt={name}
          width={150}
          height={150}
          className="rounded-full mb-4"
        />
        <h3 className="text-xl font-semibold text-[#FFC72C]">{name}</h3>
        <p className="text-sm text-[#BFD3E3]">{position}</p>
        <p className="text-center mt-3 text-gray-200">{story}</p>
        <blockquote className="text-center italic text-gray-400 mt-4">
        &quot;{quote}&quot;
        </blockquote>

        {/* Learn More button that shows up on hover */}
        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FFC72C] text-[#001A40] py-2 px-4 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TeamMember;
