import React from 'react';
import type { Section } from './types';

interface SectionInfoProps {
  section: Section | null;
}

export function SectionInfo({ section }: SectionInfoProps) {
  if (!section) {
    return (
      <div className="text-center text-gray-400">
        <p>Click on any section of the BaguaDuki diagram to learn more about its meaning and significance.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gradient mb-2">
          {section.number}. {section.title}
        </h2>
        <p className="text-xl text-gray-300">{section.description}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-purple-300 mb-3">Significance</h3>
        <p className="text-gray-300 leading-relaxed">
          This principle plays a crucial role in the BaguaDuki system by maintaining balance
          and harmony within the contract's execution. It represents one of the eight
          fundamental forces that govern the interaction between digital assets and human intent.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-purple-300 mb-3">Implementation</h3>
        <p className="text-gray-300 leading-relaxed">
          In the BaguaDuki smart contract, this principle is implemented through a series
          of mathematical functions and cryptographic operations that ensure the proper
          flow of digital assets while maintaining the intended balance of power.
        </p>
      </div>
    </div>
  );
}