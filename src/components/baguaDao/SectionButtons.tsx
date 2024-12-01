import React from 'react';
import type { Section } from './types';

interface SectionButtonsProps {
  sections: Section[];
  selectedSection: Section | null;
  onSectionClick: (id: string) => void;
}

export function SectionButtons({ sections, selectedSection, onSectionClick }: SectionButtonsProps) {
  return (
    <div className="mt-12 grid md:grid-cols-4 gap-4">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionClick(section.id)}
          className={`p-4 rounded-lg transition-all duration-300 ${
            selectedSection?.id === section.id
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-purple-500/10'
          }`}
        >
          <span className="font-bold">{section.number}.</span> {section.title}
        </button>
      ))}
    </div>
  );
}