import React from 'react';

const MissionAndVision: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-8">Mission & Vision</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission Statement */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">Mission</h3>
          <p className="text-gray-700">
            Our mission is to empower individuals and communities in Niger through innovative technology and creative solutions. We aim to provide access to advanced tools, training, and resources, fostering a culture of collaboration and creativity.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">Vision</h3>
          <p className="text-gray-700">
            Our vision is to be a leading hub of innovation in Niger, where technology meets creativity. We envision a future where local talents harness the power of digital fabrication to address community challenges and contribute to sustainable development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
