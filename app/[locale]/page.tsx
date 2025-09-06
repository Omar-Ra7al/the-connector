import Cta from "@/components/pages/home/cta";
import Hero from "@/components/pages/home/hero";
import Metrics from "@/components/pages/home/metrics";
import Services from "@/components/pages/home/services";
import AboutSection from "@/components/pages/home/whyConnector";
import { Map } from "@/components/shared/sections/map";
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
    namespace: "SEO.home",
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

export default function Home() {
  return (
    <div>
      <Hero />
      <div
        className="bg-gradient-to-t from-white via-gray-100 to-gray-200
         dark:from-black dark:via-slate-950 dark:to-black
         space-y-[80px] lg:space-y-[120px]"
      >
        <AboutSection />
        <Metrics />
        <Services />
        {/* <Map /> */}

        <OurClients rowA={IMAGES_ROW_A} rowB={IMAGES_ROW_B} />
        <Cta />
      </div>
    </div>
  );
}
