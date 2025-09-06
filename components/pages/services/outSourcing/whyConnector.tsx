"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import Section from "@/components/shared/layout/section";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";
import { useTranslations } from "next-intl";

export default function WhyConnector() {
  const t = useTranslations("Outsourcing.whyConnector");
  return (
    <Section type="outer">
      <AnimatedHeading size="md" level={3} text={t("heading")} />
      <ScrollReveal
        baseOpacity={0.5}
        enableBlur={true}
        wordAnimationEnd="center center"
        baseRotation={0}
        blurStrength={10}
        rotationEnd={"center center"}
        textClassName="mx-auto text-justify !text-xl xl:!text-3xl font-normal max-w-5xl leading-relaxed"
      >
        {t("description")}
      </ScrollReveal>
    </Section>
  );
}
