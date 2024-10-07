import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

interface BlogCardProps {
  imageSrc: any;
  title: string;
  description: string;
  date: string;
  event: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, title, description, date, event }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#001A40] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-500">{date}</p>
          <p className="text-sm font-semibold text-[#0A285F] mb-3">{event}</p>
          <button
            className="text-[#0A285F] font-semibold relative underline underline-offset-4 transition-transform duration-300 ease-in-out 
                       hover:text-[#001A40] focus:ring-2 focus:ring-[#001A40] focus:ring-opacity-50 flex items-center"
          >
            Read More
            <FaArrowRight className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
