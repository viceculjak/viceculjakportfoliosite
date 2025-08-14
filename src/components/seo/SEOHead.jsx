import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Vice C. - Program Director & Full-Stack Developer | FinTech & Biotech Expert",
  description = "Innovative entrepreneur and Program Director with 5+ years experience. Expert in Next.js 15, TypeScript, Laravel. Specializing in FinTech platforms, biotech research systems, and strategic program direction. Available for hire.",
  keywords = "full stack developer, react developer, next.js expert, typescript developer, fintech developer, ai integration, web development, freelance developer, bulgaria developer, senior developer",
  image = "https://vice.contact/og-image.jpg",
  url = "https://vice.contact",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vice ",
    "alternateName": "Vice C.",
    "jobTitle": "Program Director & Full-Stack Developer",
    "description": description,
    "url": url,
    "image": image,
    "sameAs": [
      "https://www.linkedin.com/in/vice-culjak/",
      "https://github.com/viceculjak"
    ],
    "knowsAbout": [
      "React.js",
      "Next.js 15", 
      "TypeScript",
      "Laravel",
      "FinTech Platform Development",
      "Biotech Research Systems",
      "Trade Finance",
      "Strategic Program Direction"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Program Director & Full-Stack Developer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Croatia"
      },
      "skills": [
        "FinTech Platform Development",
        "Next.js 15 Development", 
        "TypeScript Programming",
        "Laravel Development",
        "Biotech Research Systems",
        "Trade Finance Solutions",
        "Strategic Program Direction",
        "Cross-border Project Management"
      ]
    },
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "FinTech & Biotech Platform Development",
        "description": "Professional FinTech platform development, biotech research systems, and strategic program direction services"
      },
      "availability": "InStock",
      "priceRange": "€1500-€15000"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "vice@vice.contact",
      "contactType": "customer service",
      "availableLanguage": ["English", "Bulgarian"]
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ViraChemical",
    "founder": {
      "@type": "Person",
      "name": "Vice "
    },
    "url": url,
    "logo": `${url}/logo.png`,
    "description": "Professional FinTech platform development and biotech research systems",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "vice@vice.contact",
      "contactType": "customer service"
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "FinTech Platform Development",
      "Biotech Research Systems", 
      "Trade Finance Solutions",
      "Strategic Program Direction",
      "Cross-border Project Management"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Vice " />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="General" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Vice C. - Program Director & Full-Stack Developer" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@Vicedev" />

      {/* LinkedIn */}
      <meta property="linkedin:owner" content="Vice1" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#4F46E5" />
      <meta name="msapplication-TileColor" content="#4F46E5" />
      <meta name="application-name" content="Vice C. Portfolio" />
      <meta name="apple-mobile-web-app-title" content="Vice C." />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Geo Tags */}
      <meta name="geo.region" content="HR" />
      <meta name="geo.country" content="Croatia" />
      <meta name="geo.position" content="43.5081;16.4402" />
      <meta name="ICBM" content="43.5081, 16.4402" />

      {/* Business/Professional Tags */}
      <meta name="classification" content="Business" />
      <meta name="category" content="Web Development" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="preconnect" href="https://api.microlink.io" />
      
      {/* DNS Prefetch for better performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//api.microlink.io" />
    </Helmet>
  );
};

export default SEOHead;
