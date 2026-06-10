import React from 'react';
import { Hero } from '../components/landing/Hero';
import { Features } from '../components/landing/Features';
import { CoachDemo } from '../components/landing/CoachDemo';
import { Stats } from '../components/landing/Stats';
import { Testimonials } from '../components/landing/Testimonials';
import { CTA } from '../components/landing/CTA';

export const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <CoachDemo />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
};
