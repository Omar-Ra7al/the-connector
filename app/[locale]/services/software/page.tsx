import Hero from "@/components/pages/services/software/hero";
import Portfolio from "@/components/pages/services/software/portfolio";
import Services from "@/components/pages/services/software/services";
import WhyConnector from "@/components/pages/services/software/whyConnector";
import { generateSEOMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "SEO.software",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    ogTitle: t("ogTitle"),
    ogDescription: t("ogDescription"),
    twitterTitle: t("twitterTitle"),
    twitterDescription: t("twitterDescription"),

    locale: params.locale,
  };
}

const page = () => {
  return (
    <>
      <Hero />
      <WhyConnector />
      <Services />
      <Portfolio />
    </>
  );
};

export default page;
