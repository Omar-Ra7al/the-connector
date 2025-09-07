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
  const { locale }: { locale: string } = await params;
  const t = await getTranslations({
    locale,
    namespace: "SEO.software",
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
      <WhyConnector />
      <Services />
      <Portfolio />
    </>
  );
};

export default page;
