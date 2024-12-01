import React, { useState } from 'react';
import { sections } from './types';
import { BaguaDiagram } from './BaguaDiagram';
import { SectionInfo } from './SectionInfo';
import { SectionButtons } from './SectionButtons';
import type { Section } from './types';

export function BaguaDukiPage() {
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);

  const handleSectionClick = (id: string) => {
    const section = sections.find(s => s.id === id);
    if (section) {
      setSelectedSection(section);
      
      // Reset all sections to default color
      document.querySelectorAll('g[id^="named_"] path').forEach(path => {
        (path as SVGPathElement).style.fill = '#000000';
      });
      
      // Highlight selected section
      document.querySelectorAll(`g[id="named_${id}"] path`).forEach(path => {
        (path as SVGPathElement).style.fill = '#9333ea'; // Purple-600
        (path as SVGPathElement).style.transition = 'fill 0.3s ease';
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient mb-4">BaguaDuki Contract</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The BaguaDuki Contract represents the eight fundamental principles of balance and harmony.
            Click on each section to learn more about its significance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="sticky top-24">
            <BaguaDiagram onSectionClick={handleSectionClick} />
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <SectionInfo section={selectedSection} />
          </div>
        </div>

        <SectionButtons
          sections={sections}
          selectedSection={selectedSection}
          onSectionClick={handleSectionClick}
        />
      </div>
    </div>
  );
}