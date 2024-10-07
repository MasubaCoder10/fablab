'use client';
import { useState } from 'react';
import HeroSection from '../../components/HeroBlog';
import BlogSearchBar from '../../components/BlogSearch';
import Button from '../../components/Button';
import blogs from '../../data/blog'
import BlogCard from '../../components/BlogCard';




export default function page() {

  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Function to load 6 more blogs
  const loadMoreBlogs = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <main>

      <HeroSection />
      <div>
      <h1 className="text-6xl font-bold text-[#001A40] text-center my-12">Our Blog</h1>
      </div>
      <BlogSearchBar />

      <div className='flex justify-center pb-12 gap-5'>
        <Button name='All' />
        <Button name='Next Leadership Program' />
        <Button name='Youth Leadership Program' />
      </div>

      <section className="max-w-7xl mx-auto px-4 py-12">
      

      {/* Display only the blogs up to visibleCount */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.slice(0, visibleCount).map((blog) => (
          <BlogCard
            key={blog.id}
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
            className="text-white bg-[#0A285F] py-3 px-6 rounded-md transition duration-300 ease-in-out 
                       hover:bg-[#0A285F] focus:outline-none focus:ring-2 focus:ring-[#001A40] focus:ring-opacity-50 
                       transform hover:scale-110"
          >
            Load Older Blogs
          </button>
        </div>
      )}
    </section>
    </main>
  );
}
