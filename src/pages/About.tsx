import { GlobalLocal } from '../components/GlobalLocal';
import { Approach } from '../components/Approach';
import { CTA } from '../components/CTA';
import { SEO } from '../components/SEO';

export function About() {
  return (
    <div className="pt-20">
      <SEO 
        title="About Us" 
        description="Learn about Touch Base Consulting's unique approach combining global AI systems with a local handshake in Hermanus. We are your partners in digital growth."
      />
      <GlobalLocal />
      <Approach />
      <CTA />
    </div>
  );
}
