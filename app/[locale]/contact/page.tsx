import { ContactForm } from "@/components/pages/contact/form";
import Hero from "@/components/pages/contact/hero";
import { generateSEOMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "SEO.contact",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      images: [{ url: "/img/logo.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/img/logo.png"],
    },
  };
}

const page = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default page;
