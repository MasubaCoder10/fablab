
'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface BlogSearchProps {
  placeholderText?: string;
}

const BlogSearchBar: React.FC<BlogSearchProps> = ({ placeholderText = "Search blogs..." }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const t = useTranslations('BlogPageSection1')
  return (
    <div className="w-full mx-auto py-2 md:py-12 px-4 md:px-24">
      <div className="relative">
        <input
          type="text"
          className="w-full p-4 pl-10 text-white bg-[#084029] border-2 border-[#084029] rounded-md focus:outline-none focus:border-orange-600 transition-all duration-300 ease-in-out"
          placeholder={t('searchBlog')}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M16.65 9a7.65 7.65 0 11-15.3 0 7.65 7.65 0 0115.3 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default BlogSearchBar;
