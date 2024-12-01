import React, { useState } from 'react';
import { BaguaSections, Section } from '../components/baguaDao/types';
import { BaguaDukiDAO } from '../components/assets/BaguaDukiDao';

const About = () => {
  const [selectedSection, setSelectedSection] = useState<Section>(BaguaSections[0]);

  const handleSectionClick = (selectedSection: Section) => {
    console.log("selectedSection", selectedSection);
    setSelectedSection(selectedSection)
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-16 sm:pt-20">
      <div className="container mx-auto py-4 sm:py-8">
        <div className="text-center mb-6 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gradient mb-2 sm:mb-4">BaguaDuki Contract</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto px-2">
            The BaguaDuki Contract represents the eight fundamental principles of balance and harmony.
            Click on each section to learn more about its significance.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-16 items-center">
          {/* BaguaDuki Diagram - Added scaling classes */}
          <div className="relative w-full flex justify-center items-center">
            <div className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
              <BaguaDukiDAO onElementClick={handleSectionClick} />
            </div>
          </div>

          {/* Info Panel */}
          <div className="bg-gray-800 rounded-xl p-4 sm:p-8 w-full min-h-[250px] sm:h-[300px] overflow-y-auto">
            {selectedSection ? (
              <div className="flex flex-col h-full space-y-4 sm:space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 break-words"
                    style={{ color: selectedSection.color }}>
                    {selectedSection.number} - {selectedSection.id}
                  </h2>
                  <p className="text-gray-300 text-base sm:text-lg">
                    {selectedSection.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-purple-400">
                    {selectedSection.title}
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg">
                    {selectedSection.target
                      ? `${selectedSection.percentage}% ${selectedSection.target}`
                      : "No target"}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400 text-center p-4">
                <p className="text-sm sm:text-base">
                  Click on any section of the BaguaDuki diagram to learn more about its meaning and significance.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;