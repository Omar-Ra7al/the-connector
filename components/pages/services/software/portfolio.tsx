"use client";
import Section from "@/components/shared/layout/section";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";
import InfiniteMenu from "@/components/ui/InfiniteMenu";
import React from "react";

const Portfolio = () => {
  const items = [
    {
      image: "/clients/swt/websites/podMedia.png",
      link: "https://podmedia.network/",
      title: "PodMedia",
      description:
        "A leading podcast and media platform delivering high-quality audio and video content for creators and brands.",
    },
    {
      image: "/clients/swt/websites/oneTake.png",
      link: "https://www.onetake.ai/",
      title: "OneTake",
      description:
        "Autonomous video editing platform that transforms raw footage into polished, shareable content instantly.",
    },
    {
      image: "/clients/swt/websites/venttat.png",
      link: "https://venttat.sa/en",
      title: "Venttat",
      description:
        "Providing seamless and efficient public transportation solutions for a modern commuting experience.",
    },
  ];

  return (
    <Section type="outer" className="spacey-y-[30px]">
      <AnimatedHeading size="md" level={3} text="Some of Our Work" />
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
