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
      <WhyConnector />
      <Services />
      <Portfolio />
    </>
  );
};

export default page;
