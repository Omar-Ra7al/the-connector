"use client";
import Cta from "@/components/pages/home/cta";
import Hero from "@/components/pages/home/hero";
import Metrics from "@/components/pages/home/metrics";
import { OurClients } from "@/components/pages/home/ourClients";
import Services from "@/components/pages/home/services";
import AboutSection from "@/components/pages/home/whyConnector";

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
        <OurClients />
        <Cta />
      </div>
    </div>
  );
}
