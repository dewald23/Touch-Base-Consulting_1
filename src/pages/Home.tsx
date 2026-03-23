import { Hero } from '../components/Hero';
import { Pillars } from '../components/Pillars';
import { GlobalLocal } from '../components/GlobalLocal';
import { CTA } from '../components/CTA';
import { SEO } from '../components/SEO';

export function Home() {
  return (
    <>
      <SEO 
        title="Home" 
        description="Touch Base Consulting is a leading AI web design and digital marketing agency in Hermanus, Overberg. We build high-converting websites and data-driven SEO strategies."
      />
      <Hero />
      <Pillars />
      <GlobalLocal />
      <CTA />
    </>
  );
}
