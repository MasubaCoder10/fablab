import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface BlogCardProps {
  imageSrc: any;
  title: string;
  description: string;
  date: string;
  event: string;
  id:string
}

const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, title, description, date, event, id }) => {
  const Router = useRouter();
  const t = useTranslations('Btn')
  const handleLearnMore = (id: string) => {
    Router.push(`/blog/${id}`)
  }
  return (
    <div className="bg-white shadow-2xl flex flex-col overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#084029] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="mt-auto border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-500">{date}</p>
          <p className="text-sm font-semibold text-[#084029] mb-3">{event}</p>
          
          <button
          onClick={()=> handleLearnMore(id)}
            className="text-orange-600 font-semibold relative underline underline-offset-4 transition-transform duration-300 ease-in-out 
                       hover:text-orange-600 focus:ring-2 focus:ring-[#001A40] focus:ring-opacity-50 flex items-center"
          >
            {t('readMore')}
            <FaArrowRight className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </button>
          
         
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
