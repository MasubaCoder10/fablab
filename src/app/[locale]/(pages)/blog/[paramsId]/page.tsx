'use client';
import { useState } from 'react';
import Image from 'next/image';
import {useParams, useRouter} from 'next/navigation';
import HeroSection from '../../../components/HeroBlog';
import blogs from '../../../data/blog';





export default function page() {
    const paramsId = useParams<{paramsId: string}>();
    const router = useRouter();
    const blog = blogs.find((blog)=> blog.id === paramsId.paramsId);

    if(!blog){
        return <p>The blog not found</p> 
    }
  

  return (
    <>
        <HeroSection/>
        <section className="relative py-12 text-white">
   
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f5] via-[#e5e5e5] to-[#e5e5e5] opacity-90 z-[-1]" />

        <div className="container mx-auto px-4">
          <div className="flex  gap-10  items-center p-6">
            <div className='h-96 w-96 flex flex-col items-center bg-[#084029]'>
              <h1 className="text-xl font-bold text-orange-600 mb-4 pt-3">{blog.title}</h1>
              <Image
                src={blog.imageSrc}
                alt={blog.title}
                width={200}
                height={200}
                className="mb-6 h-96 w-96"
              />
            </div>

            <div className="mt-8 text-center ">
              <h2 className="text-4xl font-bold text-[#084029]">{blog.event}</h2>
              
            </div>
          </div>
        </div>


        <div className='max-w-4xl mx-auto bg-[#084029] rounded-lg shadow-lg p-6'>
          <div className="">

            <blockquote className="italic text-gray-100 mb-6">
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">Abstract</h3>
            <p className="text-md text-gray-200 mb-6">{blog.description}</p>
              <p className='flex justify-end items-end'>{blog.date}</p>
            </blockquote>

          </div>

        </div>

        <div className='max-w-4xl  mx-auto py-10'>
          <button
            onClick={() => router.back()}
            className="bg-orange-600  text-white py-2 px-4 rounded-full font-bold hover:bg-orange-700 transition duration-300"
          >
            Back to Team
          </button>
        </div>



      </section> 
    </>
  );
}
