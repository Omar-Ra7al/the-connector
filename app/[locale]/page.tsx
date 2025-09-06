"use client";
import Cta from "@/components/pages/home/cta";
import Hero from "@/components/pages/home/hero";
import Metrics from "@/components/pages/home/metrics";
import Services from "@/components/pages/home/services";
import AboutSection from "@/components/pages/home/whyConnector";
import { OurClients } from "@/components/shared/sections/ourClients";

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
        <OurClients rowA={IMAGES_ROW_A} rowB={IMAGES_ROW_B} />
        <Cta />
      </div>
    </div>
  );
}
