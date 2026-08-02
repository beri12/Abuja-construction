import { contactInfo, siteConfig, socialLinks } from "@/constants/site";

/**
 * Organization / LocalBusiness structured data for rich search results.
 * Rendered once in the root layout.
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: contactInfo.email,
    telephone: contactInfo.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address,
    },
    image: `${siteConfig.url}/images/hero-image.png`,
    sameAs: socialLinks.map((link) => link.href),
    areaServed: "Global",
    slogan: siteConfig.tagline,
  };

  return (
    <script
      type="application/ld+json"
      // Structured data is static and trusted; safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
