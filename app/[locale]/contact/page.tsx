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
  const { locale }: { locale: string } = await params;
  const t = await getTranslations({
    locale,
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
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
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
