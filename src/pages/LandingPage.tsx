import { Hero } from '../components/landing/Hero';
import { Features } from '../components/landing/Features';
import { WhyItMatters } from '../components/landing/WhyItMatters';
import { CoachDemo } from '../components/landing/CoachDemo';
import { Stats } from '../components/landing/Stats';
import { ImpactVisualization } from '../components/landing/ImpactVisualization';
import { Testimonials } from '../components/landing/Testimonials';
import { CTA } from '../components/landing/CTA';
import { CarbonAwareness } from '../components/landing/CarbonAwareness';

export const LandingPage = () => {
  return (
    <main className="flex flex-col bg-[#081C15]">
      <Hero />
      <Features />
      <CarbonAwareness />
      <WhyItMatters />
      <CoachDemo />
      <Stats />
      <ImpactVisualization />
      <Testimonials />
      <CTA />
    </main>
  );
};
