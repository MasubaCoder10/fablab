// components/CurrentProjects.tsx
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface Project {
    title: string;
    description: string;
    imageUrl: string;
}

interface CurrentProjectsProps {
    projects: Project[];
}

const CurrentProjects: React.FC<CurrentProjectsProps> = ({ projects }) => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 ">
                <div className="text-center mb-12 px-4 mx-auto">
                    <h2 className="text-4xl font-bold">Current Projects</h2>
                    <p className="text-lg mt-4 text-black max-w-3xl mx-auto">
                        Our  research focus on leveraging technology to address local needs in Niger, fostering innovation in fields like machine translation and 3D printing to empower communities.
                    </p>
                </div>
                <div className="container mx-auto pl-4 md:pl-8 ">

                    <div className="md:flex md:justify-between items-center mb-16 bg-white shadow-lg rounded-lg  transition-shadow duration-300 hover:shadow-xl">
                        <div className="md:w-1/2 p-5">
                            <h3 className="text-2xl font-bold mb-4 text-[#0A285F]">Feriji: A French-Zarma Parallel Corpus, Glossary & Translator</h3>
                            <p className="mb-6 text-[#0A285F]">
                                Feriji, the first robust French-Zarma parallel corpus and glossary. Despite significant progress in MT, African languages like Zarma are underrepresented due to linguistic complexities and resource limitations. Feriji includes 61,085 Zarma sentences and 42,789 French sentences, aiming to bridge the gap in MT resources for Zarma, which is spoken by over 5 million people in Niger and surrounding regions.
                            </p>
                            <p className="text-[#0A285F]">
                                The study evaluates the performance of three fine-tuned language models on this dataset, achieving a BLEU score of 30.06, and emphasizes the importance of promoting indigenous languages through enhanced technological access and representation.
                            </p>
                        </div>

                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <Image
                                src="https://africanarguments.org/wp-content/uploads/2022/05/image_123986672.jpg"
                                alt="Leadership Team"
                                width={600}
                                height={400}
                                className="shadow-lg object-cover"
                                priority
                            />
                        </div>
                    </div>




                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-xl rounded-lg overflow-hidden group">
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
            </div>
        </section>
    );
};

export default CurrentProjects;
