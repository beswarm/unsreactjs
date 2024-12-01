import React from 'react';
import { ArrowRightIcon } from '../components/icons';
import { Hero } from '../components/landing/Hero';
import { Mission } from '../components/landing/Mission';
import { Story } from '../components/landing/Story';

const Home = () => {
  const handleGetStarted = () => {
    // In a real application, this would trigger wallet connection
    // For now, we'll just simulate logging in
    // setIsLoggedIn(true);
  };
  return (
    <>
      <Hero onGetStarted={handleGetStarted} />
      <Mission />
      <Story />
    </>
  );
};

export default Home;