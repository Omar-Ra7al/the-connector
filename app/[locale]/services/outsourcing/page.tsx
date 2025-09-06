import Hero from "@/components/pages/services/outSourcing/hero";
import Services from "@/components/pages/services/outSourcing/services";
import OutsourcingStepper from "@/components/pages/services/outSourcing/stepper";
import WhyConnector from "@/components/pages/services/outSourcing/whyConnector";
import { OurClients } from "@/components/shared/sections/ourClients";
import { generateSEOMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";

const IMAGES_ROW_A = [
  "/clients/swt/PodMedia Network.png",
  "/clients/swt/PodEvents.png",
  "/clients/swt/Dallal_Logo.png",
  "/clients/swt/D&Partners.png",
  "/clients/swt/Mukamil.png",
  "/clients/swt/Amoramor.png",
  "/clients/swt/Venttat.png",
];

const IMAGES_ROW_B = [
  "/clients/swt/PodMedia Network.png",
  "/clients/swt/PodEvents.png",
  "/clients/swt/Dallal_Logo.png",
  "/clients/swt/D&Partners.png",
  "/clients/swt/Mukamil.png",
  "/clients/swt/Amoramor.png",
  "/clients/swt/Venttat.png",
];

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "SEO.outsourcing",
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
    }/services/outsourcing`,
    locale: params.locale,
  });
}

const page = () => {
  return (
    <>
      <Hero />
      <WhyConnector />
      <Services />
      <OutsourcingStepper />
      <OurClients rowA={IMAGES_ROW_A} rowB={IMAGES_ROW_B} />
    </>
  );
};

export default page;
