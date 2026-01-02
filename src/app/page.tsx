import { Metadata } from 'next';
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import AboutSnippet from "@/components/home/AboutSnippet";
import Testimonials from "@/components/home/Testimonials";
import { CTA } from "@/components/shared/CTA";

export const metadata: Metadata = {
  title: "Best SEO & Digital Marketing Agency in Ranchi | Scalify Labs",
  description: "Looking for expert SEO services in Ranchi? Scalify Labs helps businesses in Jharkhand grow with data-driven SEO, PPC, and digital marketing strategies. Book a free audit.",
  alternates: {
    canonical: 'https://scalifylabs.com',
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Scalify Labs",
    "image": "https://scalifylabs.com/motivated-team.png",
    "@id": "https://scalifylabs.com",
    "url": "https://scalifylabs.com",
    "telephone": "+91-9876543210", // Placeholder
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road", // Placeholder
      "addressLocality": "Ranchi",
      "addressRegion": "Jharkhand",
      "postalCode": "834001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.3441,
      "longitude": 85.3096
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.facebook.com/scalifylabs",
      "https://www.instagram.com/scalifylabs",
      "https://www.linkedin.com/company/scalifylabs"
    ],
    "priceRange": "$$"
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <AboutSnippet />
      <CTA />
      <Testimonials />
    </main>
  );
}
