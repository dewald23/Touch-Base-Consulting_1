import { CTA } from '../components/CTA';
import { SEO } from '../components/SEO';

export function Contact() {
  return (
    <div className="pt-20 min-h-[70vh] flex items-center">
      <SEO 
        title="Contact Local Agency | Touch Base Consulting" 
        description="Get in touch with Touch Base Consulting in Hermanus. Partner with our local Overberg digital marketing experts for SEO, web design, and CRM setup."
      />
      <div className="w-full">
        <CTA />
      </div>
    </div>
  );
}
