import React from 'react';
import {
  AppSection,
  CommunitySection,
  HeroSection,
  Libraries,
  StepsSection,
  TestimonialSection,
} from '../components';

const Home = () => {
  return (
    <>
      <HeroSection />
      <StepsSection />
      <CommunitySection />
      <Libraries />
      <TestimonialSection />
      <AppSection />
    </>
  );
};

export default Home;
