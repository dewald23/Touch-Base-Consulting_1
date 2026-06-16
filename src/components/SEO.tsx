import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
}

export function SEO({ 
  title, 
  description, 
  keywords = "AI web design, digital marketing, SEO, Hermanus, Overberg, Touch Base Consulting", 
  url = "https://touchbaseconsulting.co.za", 
  image = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
}: SEOProps) {
  // Ensure title contains branding without redundancy and is within optimal length (max 60 chars)
  let siteTitle = title.includes('Touch Base Consulting') 
    ? title 
    : `${title} | Touch Base Consulting`;

  if (siteTitle.length > 60) {
    siteTitle = siteTitle.substring(0, 57) + '...';
  }

  // Ensure description is within standard SEO limits (max 160 chars)
  let cleanDescription = description;
  if (cleanDescription.length > 160) {
    cleanDescription = cleanDescription.substring(0, 157) + '...';
  }

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={cleanDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph tags for social sharing */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={cleanDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={cleanDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
