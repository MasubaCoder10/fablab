// pages/team/[id].tsx
'use client';
import { useParams, useRouter } from 'next/navigation';
import { ongoingProjects, ongoingProjectFar } from '../../data/ongoingProjects';
import { FaArrowLeft } from 'react-icons/fa';
import HeroSection from '@/src/app/[locale]/components/Hero2';
import { FaDownload } from 'react-icons/fa';

const OngoingProjectDetails = () => {
    const params = useParams<{ CurrentProjectPublication: string }>()
    const router = useRouter()



    // Find the team member by id
    const project = ongoingProjects.find((project) => project.id === parseInt(params.CurrentProjectPublication));
    const projectFar = ongoingProjectFar.find((project) => project.id === parseInt(params.CurrentProjectPublication));
    const selectedProject = project || projectFar;
    if (!selectedProject) {
        return <p className='my-40 text-center'>ongoing Projects not found</p>;
    }

    const handleBackToResearch = ()=>{
        router.push('/')
    }

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
                                {selectedProject?.title}
                            </h3>
                            <p className="text-gray-600">{selectedProject?.date}</p>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-2xl font-semibold text-orange-600 mb-4">Abstract</h3>
                            <p className="text-gray-700">{selectedProject?.description}</p>
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
                            {/* Display all authors */}
                            <ul className="text-gray-600 mb-4">
                                {selectedProject?.authors?.map((author: string, index: number) => (
                                    <li key={index}>{author}</li>
                                ))}
                            </ul>
                            <h4 className="text-2xl font-semibold text-[#064f32] mb-2">Publisher</h4>
                            <p className="text-gray-600 mb-4">{selectedProject?.publisher}</p>
                            <h4 className="text-2xl font-semibold text-[#064f32] mb-2">Research Topics</h4>
                            <p className="text-gray-600 mb-4">{selectedProject?.researchTopics}</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default OngoingProjectDetails;
