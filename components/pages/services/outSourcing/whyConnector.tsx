"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import Section from "@/components/shared/layout/section";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";

export default function WhyConnector() {
  return (
    <Section type="outer">
      <AnimatedHeading size="md" level={3} text="Why Choose Us?" />
      <ScrollReveal
        baseOpacity={0.5}
        enableBlur={true}
        wordAnimationEnd="center center"
        baseRotation={0}
        blurStrength={10}
        rotationEnd={"center center"}
        textClassName="mx-auto text-justify !text-xl xl:!text-3xl font-normal max-w-5xl leading-relaxed"
      >
        We are The Connector, a company built on trust, strategy, and execution.
        Our clients choose us because we deliver secure, future-ready software
        and connect businesses with top talent at the right time. Every solution
        we create is tailored to drive growth, efficiency, and scalability.
      </ScrollReveal>
    </Section>
  );
}
