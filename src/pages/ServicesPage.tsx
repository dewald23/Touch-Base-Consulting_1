import { Services } from '../components/Services';
import { Approach } from '../components/Approach';
import { CTA } from '../components/CTA';
import { SEO } from '../components/SEO';

export function ServicesPage() {
  return (
    <div className="pt-20">
      <SEO 
        title="Digital Marketing Services" 
        description="Explore our digital marketing services: AI-powered web design, precision SEO, content strategy, and analytics for Hermanus & Overberg brands."
      />
      <Services />
      <Approach />
      <CTA />
    </div>
  );
}
