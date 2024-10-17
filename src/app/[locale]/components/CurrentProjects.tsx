// components/CurrentProjects.tsx
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { ongoingProjectFar } from '../data/ongoingProjects';
import { ongoingProjects } from '../data/ongoingProjects'


const CurrentProjects: React.FC = () => {
    const router = useRouter();
    const handleLearnMore = (id: number) => {
        // Navigate to the dynamic profile page
        router.push(`/${id}`);
    };

    
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 ">
                <div className="text-center mb-12 px-4 mx-auto">
                    <h2 className="text-4xl font-bold text-[#064f32]">Current Projects</h2>
                    <p className="text-lg mt-4 text-black max-w-3xl mx-auto">
                        Our  research focus on leveraging technology to address local needs in Niger, fostering innovation in fields like machine translation and 3D printing to empower communities.
                    </p>
                </div>
                <div className="container mx-auto pl-4 md:pl-8 ">
                    {ongoingProjectFar.map((project, index) => (
                        <div className="flex flex-col-reverse md:flex-row-reverse md:flex md:justify-between items-center mb-16 bg-white shadow-2xl overflow-hidden group transition-shadow duration-300 hover:shadow-xl">
                            <div className="md:w-1/2 px-6">
                                <h3 className="text-2xl font-bold mb-4 text-[#064f32] mt-2">{project.title}</h3>
                                <p className="mb-6 text-gray-900">
                                    {project.description}
                                </p>

                                <button
                                    onClick={() => handleLearnMore(project.id)}
                                    className="text-[#064f32] font-semibold relative underline underline-offset-4 transition-transform duration-300 ease-in-out 
                                                    hover:text-[#064f32] focus:ring-2 focus:ring-[#064f32] focus:ring-opacity-50 flex items-center"
                                >
                                    Read More
                                    <FaArrowRight className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                                </button>
                            </div>

                            <div className="relative  md:w-1/2 mt-8 md:mt-0 overflow-hidden">
                                <Image
                                    src="https://africanarguments.org/wp-content/uploads/2022/05/image_123986672.jpg"
                                    alt="Leadership Team"
                                    width={600}
                                    height={400}
                                    className="shadow-2xl object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    priority
                                />
                            </div>
                        </div>

                    ))}


                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ongoingProjects.map((project, index) => (
                        <div key={index} className="bg-white shadow-2xl overflow-hidden group">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#064f32] mb-2">{project.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                                <div className="border-t border-gray-200 pt-4">

                                    <button
                                        onClick={() => handleLearnMore(project.id)}
                                        className="text-[#064f32] font-semibold relative underline underline-offset-4 transition-transform duration-300 ease-in-out 
                                                    hover:text-[#064f32] focus:ring-2 focus:ring-[#064f32] focus:ring-opacity-50 flex items-center"
                                    >
                                        Read More
                                        <FaArrowRight className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center'>
                <a
                    href='/blog'
                    className="inline-flex items-center mt-16 bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300"
                >

                    See all the project
                </a>
                </div>
            </div>
        </section>
    );
};

export default CurrentProjects;
