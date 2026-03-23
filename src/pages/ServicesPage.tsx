import { Services } from '../components/Services';
import { Approach } from '../components/Approach';
import { CTA } from '../components/CTA';
import { SEO } from '../components/SEO';

export function ServicesPage() {
  return (
    <div className="pt-20">
      <SEO 
        title="Our Services" 
        description="Explore our digital marketing services: AI-powered web design, precision SEO, content strategy, and data-driven insights tailored for businesses in the Overberg."
      />
      <Services />
      <Approach />
      <CTA />
    </div>
  );
}
