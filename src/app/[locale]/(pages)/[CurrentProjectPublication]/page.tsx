// pages/team/[id].tsx
'use client';
import { useParams, useRouter } from 'next/navigation';
import { OngoingProjects } from '../../data/OngoingProjects';
import { OngoingProjectsFar } from '../../data/OngoingProjectFar';

import { FaArrowLeft, FaDownload } from 'react-icons/fa';
import HeroSection from '@/src/app/[locale]/components/Hero2';
import { useTranslations } from 'next-intl';

const OngoingProjectDetails = () => {
    const params = useParams<{ id: string }>(); // Fetch 'id' from params
    const router = useRouter();
    const t = useTranslations('ResearchPageSectionCard1');
    const ongoingProjects = OngoingProjects()
    const ongoingProjectsFar = OngoingProjectsFar()
    // Convert parameter id to integer if numeric
    const projectId = parseInt(params.id);

    // Find project from either array based on ID
    const project = ongoingProjects.find((proj) => proj.id === projectId) ||
        ongoingProjectsFar.find((proj) => proj.id === projectId);

    // If no project is found, show a fallback message
    if (!project) {
        return <p className="my-40 text-center">Ongoing Project not found</p>;
    }

    const handleBackToResearch = () => {
        router.push('/');
    };

    // Destructure necessary data from selected project
    const { title, date, authors, publisher, researchTopics, description } = project;

    return (
        <div className="bg-gray-100">
            <HeroSection />

            <section className="container mx-auto py-16 px-5 ">
                <div className="mb-16">
                    <button
                        onClick={handleBackToResearch}
                        className="text-[#064f32] font-semibold underline underline-offset-4 flex items-center transition-transform duration-300 ease-in-out group"
                    >
                        <FaArrowLeft className="mr-2 transition-transform duration-500 ease-in-out group-hover:scale-110" />
                        Back to Research
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[66%_33%] gap-16">
                    {/* Project Details */}
                    <div className="w-full">
                        <div className="bg-white shadow-2xl rounded-lg p-6 mb-16">
                            <h3 className="text-2xl font-semibold text-[#064f32] mb-4">{title}</h3>
                            <p className="text-gray-600">{date}</p>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-2xl font-semibold text-orange-600 mb-4">Abstract</h3>
                            <p className="text-gray-700">{description}</p>

                            <FaDownload className="mr-2" />
                            Download the paper

                        </div>
                    </div>

                    {/* Project Metadata */}
                    <div className="w-full">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-2xl font-semibold text-[#064f32] mb-4">Authors</h3>
                            <ul className="text-gray-600 mb-4">
                                {authors && authors.length > 0 ? (
                                    authors.map((author: string, index: number) => (
                                        <li key={index}>{author}</li>
                                    ))
                                ) : (
                                    <li>No authors available</li>
                                )}
                            </ul>

                            <h4 className="text-2xl font-semibold text-[#064f32] mb-2">Publisher</h4>
                            <ul className="text-gray-600 mb-4">
                                {publisher && publisher.length > 0 ? (
                                    publisher.map((pub: string, index: number) => (
                                        <li key={index}>{pub}</li>
                                    ))
                                ) : (
                                    <li>No publisher information available</li>
                                )}
                            </ul>

                            <h4 className="text-2xl font-semibold text-[#064f32] mb-2">Research Topics</h4>
                            <ul className="text-gray-600 mb-4">
                                {researchTopics && researchTopics.length > 0 ? (
                                    researchTopics.map((topic: string, index: number) => (
                                        <li key={index}>{topic}</li>
                                    ))
                                ) : (
                                    <li>No topics available</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OngoingProjectDetails;
