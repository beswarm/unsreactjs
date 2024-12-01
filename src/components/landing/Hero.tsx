import React, { useState, useEffect } from 'react';
import { ArrowRight, Heart, Car } from 'lucide-react';

const rotatingWords = [
    'FreeWill',
    'Kindness',
    'Fairness',
    'DukiInAction',
    'ALMworld',
    'Love'
];

export function Hero({ onGetStarted }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((current) => (current + 1) % rotatingWords.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631521925717-a59012e03e18?auto=format&fit=crop&q=80')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
            </div>

            <div className="relative container mx-auto pt-32 pb-16">
                <div className='mb-16'>
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="flex items-center justify-center mb-4">
                            <Heart className="text-pink-500 h-4 w-4 sm:h-6 sm:w-6 mr-2" />
                            <div className="text-2xl sm:text-4xl font-bold flex items-center justify-center">
                                <div className="word-carousel">
                                    <div className="word-carousel-container">
                                        {rotatingWords.map((word, index) => (
                                            <div
                                                key={word}
                                                className={`word-carousel-item ${index === currentIndex ? 'active' :
                                                    index === (currentIndex + 1) % rotatingWords.length ? 'next' :
                                                        index === (currentIndex - 1 + rotatingWords.length) % rotatingWords.length ? 'prev' : ''
                                                    }`}
                                            >
                                                <span className="text-gradient" style={{ whiteSpace: 'pre', textAlign: 'right' }}>
                                                    {word}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <Heart className="text-pink-500 h-4 w-4 sm:h-6 sm:w-6 ml-2" />
                        </div>

                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold flex items-center justify-center">
                            <span className="text-gradient">
                                .unstoppable<span className="road_underline">.limo</span>.limo
                            </span>
                        </h1>
                    </div>

                    <div className="relative mt-8 sm:mt-16 mr-2 ml-2">
                        <div className="web2-web3-container px-0 mb-8 sm:mb-16">
                            <div className="web2-text text-lg sm:text-xl md:text-2xl font-bold mr-[-28px]">Web2</div>
                            <div className="limo-path relative">
                                <div className="road-guide"></div>
                                <div className="limo-container overflow-hidden relative mb-4">
                                    {[...Array(5)].map((_, index) => (
                                        <div
                                            key={index}
                                            className="absolute left-0"
                                            style={{
                                                transform: 'translateX(-100%)',
                                                animation: `driveLimo 10s linear ${index * 2}s infinite`,
                                            }}
                                        >
                                            <Car className="h-6 w-12 sm:h-8 sm:w-16 text-purple-500" />
                                        </div>
                                    ))}
                                </div>
                                <div className="road-glow mt-4 sm:mt-6">
                                    <span className='ml-[32px] text-sm sm:text-base'>&nbsp;.limo for xxx.unstoppable web3 domain</span>
                                </div>
                            </div>
                            <div className="web3-text text-lg sm:text-xl md:text-2xl font-bold ml-[-16px]">Web3</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={onGetStarted}
                        className="bg-pink-600 hover:bg-pink-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full flex items-center justify-center space-x-2 transition group"
                    >
                        <span>Get Started</span>
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}