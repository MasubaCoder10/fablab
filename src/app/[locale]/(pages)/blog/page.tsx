'use client';
import React, { useState } from 'react';
import HeroSection from '../../components/HeroBlog';
import BlogSearchBar from '../../components/BlogSearch';
import  { GetBlogPosts } from '../../data/GetBlogPosts'
import BlogCard from '../../components/BlogCard';
import { useTranslations } from 'next-intl';




export default function Page() {
  const t = useTranslations('BlogPageSection1')
  const tBtn = useTranslations('Btn')
  const [visibleCount, setVisibleCount] = useState<number>(6);


  const blogs = GetBlogPosts();
  // Function to load 6 more blogs
  const loadMoreBlogs = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <main>

      <HeroSection />
      <div>
      <h1 className="text-3xl md:text-6xl font-bold text-[#084029] text-center my-6 md:my-12"> {t('title')} </h1>
      </div>
      <BlogSearchBar />

      <section className="max-w-7xl mx-auto px-4 py-12">
      

      {/* Display only the blogs up to visibleCount */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.slice(0, visibleCount).map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            imageSrc={blog.imageSrc}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            event={blog.event}
          />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < blogs.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMoreBlogs}
            className="text-white bg-orange-600 py-3 px-6 rounded-md transition duration-300 ease-in-out 
                       hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-opacity-50 
                       transform hover:scale-110"
          >
            {tBtn('btnLoadOlderBlogs')}
          </button>
        </div>
      )}
    </section>
    </main>
  );
}
