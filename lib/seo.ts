import { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  canonicalUrl: string;
  locale: string;
}

export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    twitterTitle,
    twitterDescription,
    canonicalUrl,
    locale,
  } = config;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://theconnector.co";
  const ogImage = `${baseUrl}/og-image-${locale}.jpg`;
  const twitterImage = `${baseUrl}/twitter-image-${locale}.jpg`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "The Connector" }],
    creator: "The Connector",
    publisher: "The Connector",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      url: canonicalUrl,
      title: ogTitle,
      description: ogDescription,
      siteName: "The Connector",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle,
      description: twitterDescription,
      images: [twitterImage],
      creator: "@theconnector",
      site: "@theconnector",
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
        "x-default": baseUrl,
      },
    },
    verification: {
      google: process.env.GOOGLE_VERIFICATION_ID,
      yandex: process.env.YANDEX_VERIFICATION_ID,
      yahoo: process.env.YAHOO_VERIFICATION_ID,
    },
    category: "technology",
    other: {
      "theme-color": "#00beff",
      "msapplication-TileColor": "#00beff",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default",
      "apple-mobile-web-app-title": "The Connector",
    },
  };
}

export function generateStructuredData(
  type: "Organization" | "Service" | "ContactPage" | "WebSite",
  data: any
) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://theconnector.co";

  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  switch (type) {
    case "Organization":
      return {
        ...baseStructuredData,
        name: "The Connector",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        description:
          "Leading software engineering and outsourcing company. We build secure, future-ready digital solutions and connect businesses with top talent.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cairo",
          addressCountry: "Egypt",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+20-123-456-7890",
          contactType: "customer service",
          email: "contact@theconnector.co",
          availableLanguage: ["English", "Arabic"],
        },
        sameAs: [
          "https://facebook.com/theconnector",
          "https://instagram.com/theconnector",
          "https://linkedin.com/company/theconnector",
          "https://twitter.com/theconnector",
        ],
        foundingDate: "2020",
        numberOfEmployees: "50-100",
        industry: "Software Engineering and IT Outsourcing",
      };

    case "Service":
      return {
        ...baseStructuredData,
        provider: {
          "@type": "Organization",
          name: "The Connector",
          url: baseUrl,
        },
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: data.url || baseUrl,
        },
      };

    case "ContactPage":
      return {
        ...baseStructuredData,
        mainEntity: {
          "@type": "Organization",
          name: "The Connector",
          url: baseUrl,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+20-123-456-7890",
            contactType: "customer service",
            email: "contact@theconnector.co",
            availableLanguage: ["English", "Arabic"],
          },
        },
      };

    case "WebSite":
      return {
        ...baseStructuredData,
        name: "The Connector",
        url: baseUrl,
        potentialAction: {
          "@type": "SearchAction",
          target: `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      };

    default:
      return baseStructuredData;
  }
}

export const SEO_CONSTANTS = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "https://theconnector.co",
  COMPANY_NAME: "The Connector",
  COMPANY_EMAIL: "contact@theconnector.co",
  COMPANY_PHONE: "+20-123-456-7890",
  COMPANY_ADDRESS: {
    city: "Cairo",
    country: "Egypt",
  },
  SOCIAL_LINKS: {
    facebook: "https://facebook.com/theconnector",
    instagram: "https://instagram.com/theconnector",
    linkedin: "https://linkedin.com/company/theconnector",
    twitter: "https://twitter.com/theconnector",
  },
} as const;
