import React from 'react';
import { Heart, Scale, Handshake } from 'lucide-react';

export function Mission() {
    return (
        <section id="mission" className="py-24 bg-gradient-to-b from-black to-purple-900/20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                    DUKI in Action: Our Mission
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center p-6 glass-card rounded-xl">
                        <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-3">Kindness First</h3>
                        <p className="text-gray-300">Leading with compassion and empathy in every interaction, fostering a community of care and support.</p>
                    </div>

                    <div className="text-center p-6 glass-card rounded-xl">
                        <Scale className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-3">Fairness Always</h3>
                        <p className="text-gray-300">Ensuring equal opportunities and just treatment for all, without discrimination or bias.</p>
                    </div>

                    <div className="text-center p-6 glass-card rounded-xl">
                        <Handshake className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-3">Unity Through Action</h3>
                        <p className="text-gray-300">Building bridges and fostering connections across communities through meaningful engagement.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}