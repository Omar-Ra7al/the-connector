"use client";
import Section from "@/components/shared/layout/section";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";
import InfiniteMenu from "@/components/ui/InfiniteMenu";
import React from "react";
import { useTranslations } from "next-intl";

const Portfolio = () => {
  const t = useTranslations("Software.portfolio");
  const items = t.raw("projects").map((project: any, index: number) => ({
    image:
      index === 0
        ? "/clients/swt/websites/podMedia.png"
        : index === 1
        ? "/clients/swt/websites/oneTake.png"
        : "/clients/swt/websites/venttat.png",
    link:
      index === 0
        ? "https://podmedia.network/"
        : index === 1
        ? "https://www.onetake.ai/"
        : "https://venttat.sa/en",
    title: project.title,
    description: project.description,
  }));

  return (
    <Section type="outer" className="space-y-[30px]">
      <AnimatedHeading size="md" level={3} text={t("heading")} />
      <div id="portfolio" className="w-full h-full rounded-2xl overflow-hidden">
        <InfiniteMenu
          items={items}
          sphereRadius={1.8}
          discInitialScale={0.15}
          defaultImageSize={0.5}
        />
      </div>
    </Section>
  );
};

export default Portfolio;
