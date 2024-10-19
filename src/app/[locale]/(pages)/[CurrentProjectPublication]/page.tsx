// pages/team/[id].tsx
'use client';
import { useParams, useRouter } from 'next/navigation';
import { ongoingProjects, ongoingProjectFar } from '../../data/ongoingProjects';
import { FaArrowLeft } from 'react-icons/fa';
import HeroSection from '@/src/app/[locale]/components/Hero2';
import { FaDownload } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const OngoingProjectDetails = () => {
    const params = useParams<{ CurrentProjectPublication: string }>()
    const router = useRouter()
    const t = useTranslations('ReseachPageSectionCard1');


    const projectIntel = 'Feriji1AFrench-ZarmaParallelCorpus0Glossary%26Translator' === params.CurrentProjectPublication;
    const project = ongoingProjects.find((project) => project.id === parseInt(params.CurrentProjectPublication));
    const projectFar = ongoingProjectFar.find((project) => project.id === parseInt(params.CurrentProjectPublication));
    const selectedProject = project || projectFar || projectIntel;
    if (!selectedProject) {
        return <p className='my-40 text-center'>ongoing Projects not found</p>;
    }

    const handleBackToResearch = () => {
        router.push('/')
    }
    console.log('ReseachPageSectionCard1.authors', t('authors'))
    const authors = t('ReseachPageSectionCard1.authors', { returnObjects: true }) as unknown as string[] || [];
const researchTopics = t('ReseachPageSectionCard1.researchTopics', { returnObjects: true }) as unknown as string[] || [];

    // Ensure that 'authors' is an array
    const authorArray = Array.isArray(authors) ? authors : [];
    const researchTopicArray = Array.isArray(researchTopics) ? researchTopics : [];
    console.log('authorArray', authorArray)
    console.log('researchTopicArray', researchTopicArray)
    console.log(t('authors', { returnObjects: true }));
console.log(t('researchTopics', { returnObjects: true }));

    return (
        <div className='bg-gray-100'>
            <HeroSection />


            <section className="container mx-auto py-16 px-5 ">
                <div className='mb-16'>
                    <button
                        onClick={() => handleBackToResearch()}
                        className="text-[#064f32] font-semibold relative underline underline-offset-4 group transition-transform duration-300 ease-in-out 
                                                    hover:text-[#064f32] focus:ring-2 focus:ring-[#064f32] focus:ring-opacity-50 flex items-center"
                    >
                        <FaArrowLeft className="mr-2 transition-transform duration-500 ease-in-out group-hover:scale-110" />
                        Back to Research

                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[66%_33%]  gap-16 ">
                    <div className="w-full">
                        <div className="bg-white shadow-2xl rounded-lg p-6 mb-16">
                            <h3 className="text-2xl font-semibold text-[#064f32] mb-4">
                                {t('FistCardTitle')}
                            </h3>
                            <p className="text-gray-600">{t('date')}</p>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-2xl font-semibold text-orange-600 mb-4">Abstract</h3>
                            <p className="text-gray-700">{t('FistCardDescription')}</p>
                            <a
                                href="/path/to/download"
                                download
                                className="inline-flex items-center my-6 bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300"
                            >
                                <FaDownload className="mr-2" />
                                Download the paper
                            </a>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-2xl font-semibold text-[#064f32] mb-4">Authors</h3>
                            <ul className="text-gray-600 mb-4">
                                {authorArray.length > 0 ? (
                                    authorArray.map((author: string, index: number) => (
                                        <li key={index}>{author}</li>
                                    ))
                                ) : (
                                    <li>No authors available</li>
                                )}
                            </ul>
                            <h4 className="text-2xl font-semibold text-[#064f32] mb-2">Publisher</h4>
                            <p className="text-gray-600 mb-4">{t('publisher')}</p>
                            <h4 className="text-2xl font-semibold text-[#064f32] mb-2">Research Topics</h4>
                            <ul className="text-gray-600 mb-4">
                                {researchTopicArray.length > 0 ? (
                                    researchTopicArray.map((topic: string, index: number) => (
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
