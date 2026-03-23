import { CTA } from '../components/CTA';
import { SEO } from '../components/SEO';

export function Contact() {
  return (
    <div className="pt-20 min-h-[70vh] flex items-center">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Touch Base Consulting in Hermanus. Let's discuss how we can elevate your brand with data-driven digital marketing and AI web design."
      />
      <div className="w-full">
        <CTA />
      </div>
    </div>
  );
}
