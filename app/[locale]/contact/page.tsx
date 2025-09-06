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

  return generateSEOMetadata({
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    ogTitle: t("ogTitle"),
    ogDescription: t("ogDescription"),
    twitterTitle: t("twitterTitle"),
    twitterDescription: t("twitterDescription"),
    canonicalUrl: `https://theconnector.co/${
      params.locale === "ar" ? "ar" : ""
    }/contact`,
    locale: params.locale,
  });
}

const page = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default page;
