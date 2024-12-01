import React from 'react';

export function Story() {
    return (
        <section id="story" className="py-24 bg-black/80">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                        Our Story
                    </h2>

                    <div className="space-y-8">
                        <div className="glass-card p-8 rounded-xl">
                            <h3 className="text-2xl font-bold mb-4 text-purple-400">The AllLivesMatter Movement</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Through our partnership with <a href="https://alllivesmatter.world" className="text-purple-400 hover:text-purple-300 underline">alllivesmatter.world</a>,
                                we're championing a future where every voice matters and every life has value.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Our platform serves as a bridge between Web3 technology and social advocacy,
                                creating a decentralized space where equality and justice can flourish.
                            </p>
                        </div>

                        <div className="glass-card p-8 rounded-xl">
                            <h3 className="text-2xl font-bold mb-4 text-purple-400">DUKI in Action</h3>
                            <p className="text-gray-300 leading-relaxed">
                                DUKI represents our commitment to Doing Unto Kindness Infinitely. It's not just a principle;
                                it's a movement that drives every aspect of our platform, from our user interactions to our
                                community initiatives.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}