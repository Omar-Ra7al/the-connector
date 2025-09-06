import Hero from "@/components/pages/services/outSourcing/hero";
import Services from "@/components/pages/services/outSourcing/services";
import OutsourcingStepper from "@/components/pages/services/outSourcing/stepper";
import WhyConnector from "@/components/pages/services/outSourcing/whyConnector";
import { OurClients } from "@/components/shared/sections/ourClients";
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
      <OutsourcingStepper />
      <OurClients rowA={IMAGES_ROW_A} rowB={IMAGES_ROW_B} />
    </>
  );
};

export default page;
