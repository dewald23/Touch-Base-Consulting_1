import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { Pillars } from '../components/Pillars';
import { GlobalLocal } from '../components/GlobalLocal';
import { CTA } from '../components/CTA';
import { SEO } from '../components/SEO';

export function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Touch Base Consulting",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "@id": "https://touchbaseconsulting.co.za/#organization",
    "url": "https://touchbaseconsulting.co.za",
    "telephone": "+27750908984",
    "email": "customerservice@touchbaseconsulting.co.za",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "61 De Villiers Street, Sandbaai",
      "addressLocality": "Hermanus",
      "addressRegion": "Western Cape",
      "postalCode": "7200",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -34.4217,
      "longitude": 19.2064
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+27750908984",
      "contactType": "customer service",
      "email": "customerservice@touchbaseconsulting.co.za",
      "availableLanguage": ["English"]
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Hermanus"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Overberg"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Western Cape"
      }
    ],
    "description": "Expert digital marketing strategist and AI web design agency in Hermanus. We provide SEO, content strategy, and conversion web design for South African brands."
  };

  return (
    <>
      <SEO 
        title="Digital Marketing Hermanus" 
        description="Expert digital marketing in Hermanus. AI-driven SEO, conversion-focused web design, and data analytics. Powering brands in Overberg, South Africa."
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <Hero />
      <Pillars />
      <GlobalLocal />
      <CTA />
    </>
  );
}
